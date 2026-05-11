import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import {SiCucumber} from '@icons-pack/react-simple-icons';
import {ArrowUpRight} from 'lucide-react';
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
    <div className={styles.cucumberIcon}>
      <SiCucumber size={20} color="#23D96C" />
    </div>
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
  href: string;
  badge?: string;
};

const features: Feature[] = [
  {
    icon: <CoreIcon />,
    tag: 'ktestify-core',
    title: 'Transport-agnostic engine',
    description:
      'A pure Java library with producer and consumer abstractions, pluggable record matchers (JSON, XML, XPath, Avro), dynamic variable injection, and a HOCON-based configuration system.',
    href: 'https://github.com/ktestify/ktestify-core',
  },
  {
    icon: <CucumberIcon />,
    tag: 'ktestify-cucumber',
    title: 'Gherkin-native test runner',
    description:
      'A standalone Cucumber adapter with DataTable-driven step definitions for topics, namespaces, schemas, and scripts. Write integration tests in plain English — no Kafka client code required.',
    href: 'https://github.com/ktestify/ktestify-cucumber',
  },
  {
    icon: <PluginIcon />,
    tag: 'ktestify-plugin-azureblob',
    title: 'Azure Blob plugin',
    description:
      'Extend your test scenarios with Azure Blob Storage steps. Upload files, validate blob contents, and chain blob checks with Kafka assertions — all from the same feature file.',
    href: 'https://github.com/ktestify/ktestify-plugin-azureblob',
    badge: 'Plugin',
  },
];

// ── Component ─────────────────────────────────────────────────────────────────

function FeatureCard({icon, tag, title, description, href, badge}: Feature): ReactNode {
  return (
    <Link href={href} className={styles.card} target="_blank" rel="noopener noreferrer">
      <div className={styles.cardHeader}>
        {icon}
        <span className={styles.cardTag}>{tag}</span>
        {badge && <span className={styles.cardBadge}>{badge}</span>}
        <ArrowUpRight size={14} className={styles.cardExternalIcon} />
      </div>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDesc}>{description}</p>
    </Link>
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
