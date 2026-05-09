import type {ReactNode} from 'react';
import {useEffect, useState} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

// ── Brand logo SVG ────────────────────────────────────────────────────────────

function KtestifyLogo({size = 80}: {size?: number}): ReactNode {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="kt-hg" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#6EE7B7" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#2DD4BF" stopOpacity="0.7" />
        </radialGradient>
        <filter id="kt-blur" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" />
        </filter>
      </defs>
      <rect width="80" height="80" rx="18" fill="#0C1018" />
      <line x1="16" y1="16" x2="64" y2="16" stroke="#134E4A" strokeWidth="2" strokeLinecap="round" />
      <line x1="16" y1="64" x2="64" y2="64" stroke="#134E4A" strokeWidth="2" strokeLinecap="round" />
      <line x1="16" y1="16" x2="40" y2="40" stroke="#134E4A" strokeWidth="2" strokeLinecap="round" />
      <line x1="64" y1="16" x2="40" y2="40" stroke="#134E4A" strokeWidth="2" strokeLinecap="round" />
      <line x1="16" y1="64" x2="40" y2="40" stroke="#134E4A" strokeWidth="2" strokeLinecap="round" />
      <line x1="64" y1="64" x2="40" y2="40" stroke="#134E4A" strokeWidth="2" strokeLinecap="round" />
      <circle cx="16" cy="16" r="4.5" fill="#134E4A" />
      <circle cx="64" cy="16" r="4.5" fill="#134E4A" />
      <circle cx="16" cy="64" r="4.5" fill="#134E4A" />
      <circle cx="64" cy="64" r="4.5" fill="#134E4A" />
      <circle cx="40" cy="40" r="17" fill="rgba(110,231,183,0.28)" filter="url(#kt-blur)" />
      <circle
        cx="40" cy="40" r="13"
        stroke="#6EE7B7" strokeWidth="1.5" fill="none"
        className={styles.ringExpand}
        style={{transformOrigin: '40px 40px'}}
      />
      <circle
        cx="40" cy="40" r="13"
        fill="url(#kt-hg)"
        className={styles.pulseGlow}
        style={{transformOrigin: '40px 40px'}}
      />
      <polyline
        points="33,40 38,47 49,31"
        stroke="#fff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none"
      />
    </svg>
  );
}

// ── Typewriter tagline ────────────────────────────────────────────────────────

const TAGLINE = 'Assert the stream. Own the pipeline.';

function TypewriterTagline(): ReactNode {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    // Small delay before starting so the page settles
    const start = setTimeout(() => {
      const timer = setInterval(() => {
        i++;
        setDisplayed(TAGLINE.slice(0, i));
        if (i >= TAGLINE.length) {
          clearInterval(timer);
          setDone(true);
        }
      }, 40);
      return () => clearInterval(timer);
    }, 400);
    return () => clearTimeout(start);
  }, []);

  return (
    <p className={styles.tagline}>
      {displayed}
      {!done && <span className={styles.cursor} aria-hidden="true">|</span>}
    </p>
  );
}

// ── Hero ──────────────────────────────────────────────────────────────────────

function HeroSection(): ReactNode {
  return (
    <section className={styles.hero}>
      <div className={styles.heroInner}>
        <div className={styles.heroLogo}>
          <KtestifyLogo size={80} />
          <h1 className={styles.wordmark}>
            <span className={styles.wordmarkK}>K</span>
            <span className={styles.wordmarkRest}>Testify</span>
          </h1>
        </div>
        <TypewriterTagline />
        <p className={styles.eyebrow}>Kafka Streams · Integration Testing · Gherkin DSL</p>
        <div className={styles.heroCtas}>
          <Link className={clsx(styles.btn, styles.btnPrimary)} to="/docs/intro">
            Get Started
          </Link>
          <Link className={clsx(styles.btn, styles.btnGhost)} to="https://github.com/ktestify">
            GitHub →
          </Link>
        </div>
      </div>
    </section>
  );
}

// ── Pitch ─────────────────────────────────────────────────────────────────────

function PitchSection(): ReactNode {
  return (
    <section className={styles.pitch}>
      <div className="container">
        <p className={styles.pitchLabel}>What is KTestify?</p>
        <h2 className={styles.pitchTitle}>
          Integration testing for Kafka Streams,<br />made easy.
        </h2>
        <p className={styles.pitchBody}>
          KTestify is a modular, open-source framework for testing Apache Kafka data pipelines.
          It gives teams a clean Gherkin DSL to produce messages, consume from output topics, and
          assert record content, all that without writing a single line of Kafka client code.
        </p>
      </div>
    </section>
  );
}

// ── Gherkin code block ────────────────────────────────────────────────────────

const GHERKIN_LINES = [
  'Feature: Order stream validation',
  '',
  '  Background:',
  '    Given output topic',
  '      | topicName  | topicAlias | namespace   |',
  '      | orders-out | enriched   | com.example |',
  '    Given assets directory',
  '      | path                         |',
  '      | src/test/resources/assets    |',
  '',
  '  Scenario: Enriched order appears on the output topic',
  '    When record from file is sent',
  '      | topicName | messageFile      |',
  '      | orders-in | order-123.json   |',
  '    Then expected record from file',
  '      | topicAlias | expectedFile               |',
  '      | enriched   | order-enriched-output.json |',
];

const SECTION_KW = ['Feature:', 'Background:', 'Scenario:', 'Scenario Outline:', 'Examples:'];
const STEP_KW    = ['Given ', 'When ', 'Then ', 'And ', 'But '];

function GherkinLine({line}: {line: string}): ReactNode {
  const trimmed = line.trimStart();
  const indent  = line.slice(0, line.length - trimmed.length);

  const secKw = SECTION_KW.find(kw => trimmed.startsWith(kw));
  if (secKw) {
    return (
      <span>
        {indent}<span className={styles.ghSection}>{secKw}</span>{trimmed.slice(secKw.length)}{'\n'}
      </span>
    );
  }

  const stepKw = STEP_KW.find(kw => trimmed.startsWith(kw));
  if (stepKw) {
    return (
      <span>
        {indent}
        <span className={styles.ghKeyword}>{stepKw.trim()}</span>
        {' '}{trimmed.slice(stepKw.length)}{'\n'}
      </span>
    );
  }

  if (trimmed.startsWith('|')) {
    return <span className={styles.ghTable}>{line}{'\n'}</span>;
  }

  return <span>{line}{'\n'}</span>;
}

function HowItWorksSection(): ReactNode {
  return (
    <section className={styles.howItWorks}>
      <div className="container">
        <p className={styles.sectionLabel}>How it works</p>
        <h2 className={styles.sectionTitle}>Your test suite, in Gherkin.</h2>
        <p className={styles.sectionDesc}>
          Write scenarios in plain English. KTestify handles topic wiring, message production,
          offset management, and record matching — so your tests stay readable.
        </p>
        <div className={styles.codeBlock}>
          <div className={styles.codeHeader}>
            <span className={styles.codeLang}>gherkin</span>
            <span className={styles.codeFile}>order-stream.feature</span>
          </div>
          <pre className={styles.codePre}>
            <code>
              {GHERKIN_LINES.map((line, i) => (
                <GherkinLine key={i} line={line} />
              ))}
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
}

// ── CTA ───────────────────────────────────────────────────────────────────────

function CtaSection(): ReactNode {
  return (
    <section className={styles.cta}>
      <div className="container">
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>Ready to test your streams?</h2>
          <p className={styles.ctaBody}>
            Browse the documentation to get started, or explore the source on GitHub.
          </p>
          <div className={styles.ctaBtns}>
            <Link className={clsx(styles.btn, styles.btnPrimary)} to="/docs/intro">
              Read the docs
            </Link>
            <Link className={clsx(styles.btn, styles.btnGhost)} to="https://github.com/ktestify">
              View on GitHub →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Modular Kafka Streams integration testing framework with a Gherkin DSL">
      <HeroSection />
      <PitchSection />
      <HomepageFeatures />
      <HowItWorksSection />
      <CtaSection />
    </Layout>
  );
}
