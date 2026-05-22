/**
 * ng add brightrail — wires platform + i18n providers into app config when possible.
 * @param {import('@angular-devkit/schematics').Tree} tree
 */
function ngAdd() {
  return (tree) => {
    const configPaths = ['src/app/app.config.ts', 'src/app/app.config.server.ts'];

    for (const path of configPaths) {
      if (!tree.exists(path)) {
        continue;
      }
      let source = tree.read(path).toString('utf-8');
      if (source.includes('provideBrightrailPlatform()')) {
        continue;
      }

      if (!/from ['"]brightrail['"]/.test(source)) {
        source = source.replace(
          /^(import .+;\n)+/m,
          (block) =>
            `${block}import { provideBrightrailI18n, provideBrightrailPlatform } from 'brightrail';\n`,
        );
      } else if (!source.includes('provideBrightrailI18n')) {
        source = source.replace(
          /from ['"]brightrail['"];/,
          "from 'brightrail';\nimport { provideBrightrailI18n, provideBrightrailPlatform } from 'brightrail';",
        );
      } else {
        source = source.replace(
          /from ['"]brightrail['"];/,
          "from 'brightrail';\nimport { provideBrightrailPlatform } from 'brightrail';",
        );
      }

      source = source.replace(
        /providers:\s*\[/,
        'providers: [\n    provideBrightrailPlatform(),\n    provideBrightrailI18n(),',
      );
      tree.overwrite(path, source);
    }

    const stylesPath = 'src/styles.scss';
    if (tree.exists(stylesPath)) {
      const styles = tree.read(stylesPath).toString('utf-8');
      if (!styles.includes('brightrail-root')) {
        tree.overwrite(stylesPath, `@import 'brightrail/styles/brightrail-root.scss';\n\n${styles}`);
      }
    }

    return tree;
  };
}

module.exports = { ngAdd };
