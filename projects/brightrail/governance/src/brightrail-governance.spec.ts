import {
  BRIGHTRAIL_ADOPTION_CHECKLIST,
  BRIGHTRAIL_OPERATIONAL_GATES,
  BRIGHTRAIL_SEMVER_POLICY,
} from './brightrail-governance';

describe('brightrail-governance', () => {
  it('ships a required adoption checklist', () => {
    expect(BRIGHTRAIL_ADOPTION_CHECKLIST.some((i) => i.id === 'platform' && i.required)).toBe(true);
    expect(BRIGHTRAIL_ADOPTION_CHECKLIST.some((i) => i.id === 'i18n' && i.required)).toBe(true);
  });

  it('documents operational CI gates', () => {
    expect(BRIGHTRAIL_OPERATIONAL_GATES.a11yGate).toContain('e2e:a11y');
    expect(BRIGHTRAIL_OPERATIONAL_GATES.visualGate).toContain('e2e:visual');
  });

  it('defines semver policy fields', () => {
    expect(BRIGHTRAIL_SEMVER_POLICY.major.length).toBeGreaterThan(0);
    expect(BRIGHTRAIL_SEMVER_POLICY.deprecationWindow).toContain('minor');
  });
});
