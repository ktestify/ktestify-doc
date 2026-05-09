import type {ReactNode} from 'react';
import styles from './styles.module.css';

// ── Feature icons ─────────────────────────────────────────────────────────────

function CoreIcon(): ReactNode {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect width="32" height="32" rx="8" fill="rgba(110,231,183,0.07)" stroke="#1c2535" strokeWidth="1" />
      <circle cx="16" cy="16" r="5.5" stroke="#6EE7B7" strokeWidth="1.5" fill="none" />
      <circle cx="16" cy="7.5" r="2" fill="#134E4A" />
      <circle cx="16" cy="24.5" r="2" fill="#134E4A" />
      <circle cx="7.5" cy="16" r="2" fill="#134E4A" />
      <circle cx="24.5" cy="16" r="2" fill="#134E4A" />
      <line x1="16" y1="10.5" x2="16" y2="9.5" stroke="#1c2535" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="16" y1="22.5" x2="16" y2="21.5" stroke="#1c2535" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="10.5" y1="16" x2="9.5" y2="16" stroke="#1c2535" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="22.5" y1="16" x2="21.5" y2="16" stroke="#1c2535" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="16" cy="16" r="2.5" fill="#6EE7B7" />
    </svg>
  );
}

function CucumberIcon(): ReactNode {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect width="32" height="32" rx="8" fill="rgba(110,231,183,0.07)" stroke="#1c2535" strokeWidth="1" />
      <rect x="7" y="9" width="18" height="2" rx="1" fill="#134E4A" />
      <rect x="7" y="13.5" width="13" height="2" rx="1" fill="#6EE7B7" />
      <rect x="7" y="18" width="16" height="2" rx="1" fill="#134E4A" />
      <rect x="7" y="22.5" width="10" height="2" rx="1" fill="#6EE7B7" />
      <rect x="9" y="11" width="2" height="2" rx="0.5" fill="#2DD4BF" />
      <rect x="9" y="15.5" width="2" height="2" rx="0.5" fill="#2DD4BF" />
      <rect x="9" y="20" width="2" height="2" rx="0.5" fill="#2DD4BF" />
    </svg>
  );
}

function PluginIcon(): ReactNode {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect width="32" height="32" rx="8" fill="rgba(110,231,183,0.07)" stroke="#1c2535" strokeWidth="1" />
      <rect x="7" y="12" width="11" height="8" rx="2" stroke="#6EE7B7" strokeWidth="1.5" fill="none" />
      <line x1="18" y1="15" x2="23" y2="15" stroke="#2DD4BF" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="18" y1="17" x2="23" y2="17" stroke="#2DD4BF" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="24.5" cy="16" r="1.5" fill="#6EE7B7" />
      <line x1="10.5" y1="9" x2="10.5" y2="12" stroke="#134E4A" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="14.5" y1="9" x2="14.5" y2="12" stroke="#134E4A" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

// ── Data ──────────────────────────────────────────────────────────────────────

type Feature = {
  icon: ReactNode;
  tag: string;
  title: string;
  description: string;
  badge?: string;
};

const features: Feature[] = [
  {
    icon: <CoreIcon />,
    tag: 'ktestify-core',
    title: 'Transport-agnostic engine',
    description:
      'A pure Java library with producer and consumer abstractions, pluggable record matchers (JSON, XML, XPath, Avro), dynamic variable injection, and a HOCON-based configuration system.',
  },
  {
    icon: <CucumberIcon />,
    tag: 'ktestify-cucumber',
    title: 'Gherkin-native test runner',
    description:
      'A standalone Cucumber adapter with DataTable-driven step definitions for topics, namespaces, schemas, and scripts. Write integration tests in plain English — no Kafka client code required.',
  },
  {
    icon: <PluginIcon />,
    tag: 'ktestify-plugin-azureblob',
    title: 'Azure Blob plugin',
    description:
      'Extend your test scenarios with Azure Blob Storage steps. Upload files, validate blob contents, and chain blob checks with Kafka assertions — all from the same feature file.',
    badge: 'Plugin',
  },
];

// ── Component ─────────────────────────────────────────────────────────────────

function FeatureCard({icon, tag, title, description, badge}: Feature): ReactNode {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        {icon}
        <span className={styles.cardTag}>{tag}</span>
        {badge && <span className={styles.cardBadge}>{badge}</span>}
      </div>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDesc}>{description}</p>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <p className={styles.sectionLabel}>Modules</p>
        <h2 className={styles.sectionTitle}>Everything you need, modular by design.</h2>
        <div className={styles.grid}>
          {features.map((f) => (
            <FeatureCard key={f.tag} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
}
