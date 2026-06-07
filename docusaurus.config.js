// @ts-check
const config = {
  title: 'ThreatMapper',
  tagline: 'Self-hosted AI threat intelligence — ATT&CK mapping, APT attribution, and PDF reports in one Docker stack.',
  favicon: 'img/favicon.svg',

  url: 'https://anpa1200.github.io',
  baseUrl: '/threatmapper-docs/',
  organizationName: 'anpa1200',
  projectName: 'threatmapper-docs',

  headTags: [
    {
      tagName: 'script',
      attributes: { async: 'true', src: 'https://www.googletagmanager.com/gtag/js?id=G-TMTG21RVHM' },
    },
    {
      tagName: 'script',
      attributes: {},
      innerHTML: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-TMTG21RVHM');
      `,
    },
  ],

  deploymentBranch: 'gh-pages',
  trailingSlash: true,
  onBrokenLinks: 'warn',
  markdown: { hooks: { onBrokenMarkdownLinks: 'warn' } },
  i18n: { defaultLocale: 'en', locales: ['en'] },

  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/anpa1200/threatmapper-docs/edit/main/',
        },
        blog: false,
        theme: { customCss: require.resolve('./src/css/custom.css') },
      },
    ],
  ],

  themeConfig: {
    image: 'img/logo.png',
    metadata: [
      {
        name: 'keywords',
        content: 'threat intelligence, ATT&CK, MITRE, APT attribution, LLM, Claude, GPT-4o, Gemini, self-hosted, Docker, Jaccard similarity',
      },
    ],
    navbar: {
      title: 'ThreatMapper',
      logo: { alt: '1200km', src: 'img/logo.png' },
      items: [
        { type: 'docSidebar', sidebarId: 'docsSidebar', position: 'left', label: 'Docs' },
        { to: '/api/overview', label: 'API', position: 'left' },
        {
          label: 'Projects',
          position: 'right',
          items: [
            { label: 'CTI Analyst Field Manual', href: 'https://anpa1200.github.io/cti-analyst-field-manual/' },
            { label: 'CTI as a Code', href: 'https://anpa1200.github.io/CTI_as_a_Code/' },
            { label: 'Operation Desert Hydra', href: 'https://anpa1200.github.io/operation-desert-hydra/' },
            { label: 'Customer-Driven AI CTI', href: 'https://anpa1200.github.io/customer-driven-ai-cti-project/' },
            { label: 'Israel Threat Actors CTI', href: 'https://anpa1200.github.io/israel-government-threat-actors-cti/' },
            { label: 'AI vs Defense', href: 'https://anpa1200.github.io/ai-vs-defense/' },
            { label: 'HexStrike AI', href: 'https://github.com/0x4m4/hexstrike-ai' },
          ],
        },
        { href: 'https://medium.com/@1200km', label: 'Medium', position: 'right' },
        { href: 'https://github.com/anpa1200/threatmapper', label: 'GitHub', position: 'right' },
        { href: 'https://anpa1200.github.io/', label: 'Main Page', position: 'right', className: 'navbar-portfolio-btn' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Getting Started',
          items: [
            { label: 'Introduction', to: '/intro' },
            { label: 'Setup (10 min)', to: '/getting-started' },
            { label: 'Core Workflow', to: '/ai-analysis/overview' },
          ],
        },
        {
          title: 'Features',
          items: [
            { label: 'Navigator', to: '/navigator/overview' },
            { label: 'Compare Modes', to: '/compare/overview' },
            { label: 'API Reference', to: '/api/overview' },
          ],
        },
        {
          title: 'Ecosystem',
          items: [
            { label: 'CTI Analyst Field Manual', href: 'https://anpa1200.github.io/cti-analyst-field-manual/' },
            { label: 'CTI as a Code', href: 'https://anpa1200.github.io/CTI_as_a_Code/' },
            { label: 'Operation Desert Hydra', href: 'https://anpa1200.github.io/operation-desert-hydra/' },
          ],
        },
        {
          title: 'Author',
          items: [
            { label: 'Medium', href: 'https://medium.com/@1200km' },
            { label: 'GitHub', href: 'https://github.com/anpa1200' },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/andrey-pautov/' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Andrey Pautov. ThreatMapper — self-hosted AI threat intelligence platform.`,
    },
    prism: {
      additionalLanguages: ['bash', 'json', 'python', 'yaml'],
      theme: require('prism-react-renderer').themes.github,
      darkTheme: require('prism-react-renderer').themes.dracula,
    },
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
  },
};

module.exports = config;
