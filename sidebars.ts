import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'intro',

    // ── Getting Started ──────────────────────────────────────────────────────
    {
      type: 'category',
      label: 'Getting Started',
      link: {type: 'generated-index', description: 'Everything you need to run your first KTestify test.'},
      items: [
        'getting-started/installation',
        'getting-started/quick-start',
        'getting-started/ci-environment',
        'getting-started/configuration',
      ],
    },

    // ── Write Tests (QA / Test-Engineer track) ───────────────────────────────
    {
      type: 'category',
      label: '‍🧪 Write Tests',
      link: {type: 'doc', id: 'write-tests/overview'},
      items: [
        'write-tests/overview',
        'write-tests/configuration',
        {
          type: 'category',
          label: 'Background — Given',
          link: {type: 'generated-index', description: 'Declare topics, namespaces, schemas, and directories for your scenario.'},
          items: [
            'write-tests/background/namespaces',
            'write-tests/background/topics',
            'write-tests/background/assets-directory',
            'write-tests/background/schemas',
          ],
        },
        {
          type: 'category',
          label: 'Actions — When',
          link: {type: 'generated-index', description: 'Produce messages, send files, trigger scripts.'},
          items: [
            'write-tests/actions/send-raw-record',
            'write-tests/actions/send-avro-record',
            'write-tests/actions/wait-and-script',
          ],
        },
        {
          type: 'category',
          label: 'Assertions — Then',
          link: {type: 'generated-index', description: 'Consume and assert output records.'},
          items: [
            'write-tests/assertions/raw-matchers',
            'write-tests/assertions/xml-matchers',
            'write-tests/assertions/avro-matchers',
            'write-tests/assertions/batch-assertions',
            'write-tests/assertions/watcher',
          ],
        },
        'write-tests/dynamic-variables',
        {
          type: 'category',
          label: 'Advanced',
          link: {type: 'generated-index', description: 'Batch mode, timeout tuning, and roundtrip test patterns.'},
          items: [
            'write-tests/advanced/timeout-tuning',
            'write-tests/advanced/batch-testing',
          ],
        },
        'write-tests/step-reference',
      ],
    },

    // ── Extend (Java-Developer track) ────────────────────────────────────────
    {
      type: 'category',
      label: '🔧 Extend the Framework',
      link: {type: 'doc', id: 'extend/architecture'},
      items: [
        'extend/architecture',
        'extend/core-concepts',
        {
          type: 'category',
          label: 'Transports',
          link: {type: 'generated-index', description: 'How KTestify fetches records and how to add a new transport.'},
          items: [
            'extend/transports/kafka',
            'extend/transports/adding-a-transport',
          ],
        },
        {
          type: 'category',
          label: 'Matchers',
          link: {type: 'generated-index', description: 'Built-in assertion strategies and how to write your own.'},
          items: [
            'extend/matchers/built-in-matchers',
            'extend/matchers/custom-matcher',
          ],
        },
        {
          type: 'category',
          label: 'Plugins',
          link: {type: 'generated-index', description: 'The KTestify plugin system and available plugins.'},
          items: [
            'extend/plugins/plugin-system',
            'extend/plugins/azureblob',
          ],
        },
      ],
    },
  ],
};

export default sidebars;
