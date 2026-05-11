import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'KTestify',
  tagline: 'Assert the stream. Own the pipeline.',
  favicon: 'img/favicon.ico',
  themes: ['@docusaurus/theme-mermaid'],
  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
   url: 'https://docs.ktestify.xyz',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ktestify', // Usually your GitHub org/user name.
  projectName: 'ktestify-doc', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    mermaid: true,
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/ktestify/ktestify-doc/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'KTestify',
      logo: {
        alt: 'KTestify Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: '/docs/intro',
          label: 'Docs',
          position: 'left',
          activeBaseRegex: '/docs/(intro|getting-started)',
        },
        {
          to: '/docs/write-tests/overview',
          label: 'Write Tests',
          position: 'left',
          activeBaseRegex: '/docs/write-tests',
        },
        {
          to: '/docs/extend/architecture',
          label: 'Extend',
          position: 'left',
          activeBaseRegex: '/docs/extend',
        },
        {
          href: 'https://github.com/ktestify/',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {label: 'Introduction', to: '/docs/intro'},
            {label: 'Getting Started', to: '/docs/getting-started/installation'},
            {label: 'Write Tests', to: '/docs/write-tests/overview'},
            {label: 'Extend the Framework', to: '/docs/extend/architecture'},
            {label: 'Step Reference', to: '/docs/write-tests/step-reference'},
          ],
        },
        {
          title: 'Modules',
          items: [
            {
              label: 'ktestify-core',
              href: 'https://github.com/ktestify/ktestify-core',
            },
            {
              label: 'ktestify-cucumber',
              href: 'https://github.com/ktestify/ktestify-cucumber',
            },
            {
              label: 'ktestify-plugin-azureblob',
              href: 'https://github.com/ktestify/ktestify-plugin-azureblob',
            },
          ],
        },
        {
          title: 'Project',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/ktestify',
            },
            {
              label: 'Changelog',
              href: 'https://github.com/ktestify/ktestify-core/blob/main/CHANGELOG.md',
            },
            {
              label: 'License (Apache 2.0)',
              href: 'https://github.com/ktestify/ktestify-core/blob/main/LICENSE',
            },
          ],
        },
      ],
      copyright: `Assert the stream. Own the pipeline. · Apache 2.0 · © ${new Date().getFullYear()} KTestify`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.vsDark,
      additionalLanguages: ['java', 'bash', 'gherkin', 'yaml', 'json'],
    },
    // Algolia DocSearch — apply at https://docsearch.algolia.com/apply/
    // Uncomment and fill in your credentials once approved.
     algolia: {
       appId: '5344CTZ4OP',
       apiKey: 'aa9495d3aa2daf2a733a0c66914ec052',
       indexName: 'KTestify Documentation',
       contextualSearch: true,
     },
  } satisfies Preset.ThemeConfig,


};

export default config;
