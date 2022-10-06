// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Bakalaureuse lõputöö',
  tagline: 'Parim lõputöö maailmas',
  url: 'https://localhost:3001',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'pearupung', // Usually your GitHub org/user name.
  projectName: 'bachelor-thesis', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'et',
    locales: ['et'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
            path: 'docs/thesis',
            routeBasePath: 'thesis',
            // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
    plugins: [
        [
        '@docusaurus/plugin-content-docs',
        {
            id: 'notes',
            path: 'docs/notes',
            routeBasePath: 'notes',
        },
        ],
        [
        '@docusaurus/plugin-content-docs',
        {
            id: 'plan',
            path: 'docs/plan',
            routeBasePath: 'plan',
        },
        ],
    ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Bakalaureuse lõputöö',
        logo: {
          alt: 'My Site Logo',
          src: 'img/university.jpg',
        },
        items: [
          {
            type: 'doc',
            to: 'docs/thesis/',
            docId: 'intro',
            position: 'left',
            label: 'Lõputöö',
            sidebarPath: require.resolve('./sidebars.js')
          },
          {
            type: 'doc',
            docsPluginId: 'notes',
            to: 'docs/notes/',
            docId: 'intro',
            position: 'left',
            sidebarPath: require.resolve('./notesSidebar.js'),
            label: 'Märkmed'},
            {
            href: 'https://github.com/pearupung/bachelor-thesis',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'doc',
            docsPluginId: 'plan',
            docId: 'intro',
            position: 'left',
            sidebarPath: require.resolve('./planSidebar.js'),
            label: 'Kavand'},
            {
            href: 'https://github.com/pearupung/bachelor-thesis',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Pearu Pung. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
