module.exports = {
  docsSidebar: [
    'intro',
    'getting-started',
    {
      type: 'category',
      label: 'AI Analysis',
      items: [
        'ai-analysis/overview',
        'ai-analysis/chat-assistant',
        'ai-analysis/domains',
      ],
    },
    {
      type: 'category',
      label: 'Navigator',
      items: [
        'navigator/overview',
        'navigator/layers',
        'navigator/import-export',
      ],
    },
    {
      type: 'category',
      label: 'APT Library',
      items: [
        'apt-library/overview',
      ],
    },
    {
      type: 'category',
      label: 'Compare',
      items: [
        'compare/overview',
        'compare/groups',
        'compare/campaigns',
        'compare/reports',
      ],
    },
    'two-databases',
    'generating-reports',
    {
      type: 'category',
      label: 'API Reference',
      items: [
        'api/overview',
        'api/analyze',
        'api/layers',
        'api/compare',
        'api/export',
        'api/sync',
      ],
    },
    'tips',
    'security',
    'roadmap',
  ],
};
