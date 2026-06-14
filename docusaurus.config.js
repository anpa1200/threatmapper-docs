// @ts-check
const config = {
  title: 'ThreatMapper Documentation — CTI-to-Detection Workbench | 1200km',
  tagline: 'CTI-to-detection intelligence platform — investigate behavior, map ATT&CK evidence, compare overlap, and operationalize findings.',
  favicon: 'img/logo.png',

  url: 'https://1200km.com',
  baseUrl: '/threatmapper-docs/',
  scripts: [{src: 'https://1200km.com/assets/docusaurus-ecosystem.js?v=20260614-2', defer: true}],
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
        content: 'cyber threat intelligence, MITRE ATT&CK, CTI-to-detection, detection engineering, threat hunting, TTP mapping, group similarity, campaign similarity, self-hosted CTI platform',
      },
    ],
    navbar: {
      title: 'ThreatMapper',
      logo: { alt: '1200km', src: 'img/logo.png' },
      items: [
        { href: 'https://1200km.com/threat-matrix/', label: 'Live Workspace', position: 'left' },
        { type: 'docSidebar', sidebarId: 'docsSidebar', position: 'left', label: 'Docs' },
        { to: '/api/overview', label: 'API', position: 'left' },
        {
          label: 'Projects',
          position: 'right',
          items: [
            { label: 'CTI Analyst Field Manual', href: 'https://1200km.com/cti-analyst-field-manual/' },
            { label: 'CTI as a Code', href: 'https://1200km.com/CTI_as_a_Code/' },
            { label: 'Operation Desert Hydra', href: 'https://1200km.com/operation-desert-hydra/' },
            { label: 'Customer-Driven AI CTI', href: 'https://1200km.com/customer-driven-ai-cti-project/' },
            { label: 'Israel Threat Actors CTI', href: 'https://1200km.com/israel-government-threat-actors-cti/' },
            { label: 'AI vs Defense', href: 'https://1200km.com/ai-vs-defense/' },
            { label: 'HexStrike AI', href: 'https://github.com/0x4m4/hexstrike-ai' },
          ],
        },
        { href: 'https://medium.com/@1200km', label: 'Medium', position: 'right' },
        { href: 'https://github.com/anpa1200/threatmapper', label: 'GitHub', position: 'right' },
        { href: 'https://1200km.com/', label: 'Main Page', position: 'right', className: 'navbar-portfolio-btn' },
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
            { label: 'ThreatMapper Live Workspace', href: 'https://1200km.com/threat-matrix/' },
            { label: 'CTI Analyst Field Manual', href: 'https://1200km.com/cti-analyst-field-manual/' },
            { label: 'CTI as a Code', href: 'https://1200km.com/CTI_as_a_Code/' },
            { label: 'Operation Desert Hydra', href: 'https://1200km.com/operation-desert-hydra/' },
            { label: 'Customer-Driven AI CTI', href: 'https://1200km.com/customer-driven-ai-cti-project/' },
            { label: 'Israel Threat Actors CTI', href: 'https://1200km.com/israel-government-threat-actors-cti/' },
            { label: 'AI vs Defense', href: 'https://1200km.com/ai-vs-defense/' },
            { label: 'HexStrike AI', href: 'https://github.com/0x4m4/hexstrike-ai' },
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
      copyright: `Copyright © ${new Date().getFullYear()} Andrey Pautov. ThreatMapper AI — CTI-to-detection workbench and self-hosted ATT&CK analysis platform.`,
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
