import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'intro',

    // Tutorials (learning-oriented)
    {
      type: 'category',
      label: 'Tutorials',
      link: {type: 'generated-index', description: 'Get KTestify running and write your first test, step by step.'},
      items: [
        'getting-started/installation',
        'getting-started/ci-environment',
        'getting-started/quick-start',
      ],
    },

    // How-to Guides (task-oriented)
    {
      type: 'category',
      label: 'How-to Guides',
      link: {type: 'generated-index', description: 'Task recipes: write steps, use plugins, extend the framework.'},
      items: [
        'write-tests/overview',
        {
          type: 'category',
          label: 'Write Kafka tests',
          items: [
            {
              type: 'category',
              label: 'Background (Given)',
              items: [
                'write-tests/background/namespaces',
                'write-tests/background/topics',
                'write-tests/background/assets-directory',
                'write-tests/background/schemas',
              ],
            },
            {
              type: 'category',
              label: 'Actions (When)',
              items: [
                'write-tests/actions/send-raw-record',
                'write-tests/actions/send-avro-record',
                'write-tests/actions/wait-and-script',
              ],
            },
            {
              type: 'category',
              label: 'Assertions (Then)',
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
              label: 'Advanced patterns',
              items: [
                'write-tests/advanced/timeout-tuning',
                'write-tests/advanced/batch-testing',
                'write-tests/advanced/multi-row-datatables',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Use plugins',
          items: [
            'extend/plugins/http',
            'extend/plugins/azureblob',
            'extend/plugins/notifications',
          ],
        },
        {
          type: 'category',
          label: 'Extend the framework',
          items: [
            'extend/transports/adding-a-transport',
            'extend/matchers/custom-matcher',
            'extend/plugins/create-plugin',
          ],
        },
      ],
    },

    // Reference (information-oriented)
    {
      type: 'category',
      label: 'Reference',
      link: {type: 'generated-index', description: 'Lookup tables: every step, config key, matcher, and plugin.'},
      items: [
        'write-tests/step-reference',
        'getting-started/configuration',
        'extend/matchers/built-in-matchers',
        'extend/plugins/index',
      ],
    },

    // Explanation (understanding-oriented)
    {
      type: 'category',
      label: 'Explanation',
      link: {type: 'generated-index', description: 'Why KTestify is built the way it is: architecture and core concepts.'},
      items: [
        'extend/architecture',
        'extend/core-concepts',
        {
          type: 'category',
          label: 'Transports',
          items: [
            'extend/transports/kafka',
            'extend/transports/synchronous-transports',
          ],
        },
      ],
    },
  ],
};

export default sidebars;
