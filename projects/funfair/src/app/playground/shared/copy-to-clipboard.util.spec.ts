import { copyTextToClipboard } from './copy-to-clipboard.util';

describe('copyTextToClipboard', () => {
  const originalNavigator = globalThis.navigator;

  afterEach(() => {
    Object.defineProperty(globalThis, 'navigator', {
      configurable: true,
      value: originalNavigator,
    });
  });

  it('returns false for empty text', async () => {
    await expectAsync(copyTextToClipboard('')).toBeResolvedTo(false);
  });

  it('writes via clipboard API when available', async () => {
    const writeText = jasmine.createSpy('writeText').and.resolveTo(undefined);
    Object.defineProperty(globalThis, 'navigator', {
      configurable: true,
      value: { clipboard: { writeText } },
    });

    await expectAsync(copyTextToClipboard('<brightrail-button />')).toBeResolvedTo(true);
    expect(writeText).toHaveBeenCalledWith('<brightrail-button />');
  });

  it('returns false when clipboard write fails', async () => {
    const writeText = jasmine.createSpy('writeText').and.rejectWith(new Error('denied'));
    Object.defineProperty(globalThis, 'navigator', {
      configurable: true,
      value: { clipboard: { writeText } },
    });

    await expectAsync(copyTextToClipboard('x')).toBeResolvedTo(false);
  });
});
