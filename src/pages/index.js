import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

const features = [
  ['AI Analysis', 'Upload PDF, DOCX, or TXT — or paste text — and get a streamed ATT&CK technique extraction with evidence snippets and confidence scores. Supports Claude, GPT-4o, and Gemini.', '/ai-analysis/overview'],
  ['ATT&CK Navigator', 'Interactive heatmap of the full ATT&CK matrix (Enterprise, Mobile, ICS). Build, save, reload, and export named TTP layers. Overlay any APT group for instant visual diff.', '/navigator/overview'],
  ['APT Attribution', 'Automatic Jaccard similarity ranking against 174+ named threat groups and 56+ named campaigns. See exactly which techniques you share and what your detection gaps are.', '/compare/overview'],
  ['Two Databases', 'DB 1 holds the full MITRE ATT&CK dataset including named campaigns. DB 2 stores every AI analysis you run — re-compare any past report without re-calling the LLM.', '/two-databases'],
  ['PDF Reports', 'Generate multi-page formatted PDF reports from any analysis or Navigator layer. Includes cover page, executive summary, technique table, APT attribution, and tactic coverage.', '/generating-reports'],
  ['REST API', 'Drive the entire workflow programmatically. Headless analysis, batch comparisons, layer management — all exposed as a documented REST API (Swagger at /docs).', '/api/overview'],
];

export default function Home() {
  return (
    <Layout
      title="ThreatMapper — Self-Hosted AI Threat Intelligence"
      description="Map adversary behaviour to MITRE ATT&CK in seconds, compare against 174+ APT groups, and generate PDF reports — all running locally with your own LLM keys."
    >
      <header className="hero hero--threatmapper">
        <div className="container" style={{ textAlign: 'center', padding: '4rem 1rem 3rem' }}>
          <div style={{ marginBottom: '1rem' }}>
            <span className="tm-badge">Open Source</span>
            <span className="tm-badge">Self-Hosted</span>
            <span className="tm-badge">MIT Licence</span>
          </div>
          <h1 className="hero__title">ThreatMapper</h1>
          <p className="hero__subtitle">
            Map adversary behaviour to MITRE ATT&CK in seconds, compare against 174+ APT groups,
            and generate PDF reports — all running locally with your own LLM keys.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link className="button button--primary button--lg" to="/getting-started">
              Get Started in 10 Min →
            </Link>
            <Link className="button button--secondary button--lg" to="/intro">
              Read the Docs
            </Link>
            <Link
              className="button button--secondary button--lg"
              href="https://github.com/anpa1200/threatmapper"
            >
              GitHub
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section className="tm-section">
          <div className="container">
            <h2>What It Does</h2>
            <p style={{ maxWidth: 720 }}>
              You give ThreatMapper a threat report — malware writeup, IR summary, vendor advisory, raw Slack thread.
              It gives you ATT&CK technique IDs, confidence scores, evidence snippets, and a ranked list of APT groups
              whose known TTP profile overlaps with what you observed. All computation is local. Nothing leaves your machine.
            </p>
          </div>
        </section>

        <section className="tm-section" style={{ paddingTop: 0 }}>
          <div className="container">
            <h2>Core Features</h2>
            <div className="tm-grid">
              {features.map(([title, body, href]) => (
                <article className="tm-card" key={title}>
                  <h3>{title}</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--ifm-color-emphasis-700)' }}>{body}</p>
                  <Link to={href}>Read more →</Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="tm-section">
          <div className="container">
            <h2>The Analyst Workflow</h2>
            <ol style={{ maxWidth: 640, fontSize: '0.95rem', lineHeight: '1.9' }}>
              <li><strong>AI Analysis</strong> — upload a report and pick a provider (Claude, GPT-4o, Gemini)</li>
              <li><strong>Inject into Navigator</strong> — push extracted techniques into the live ATT&CK matrix</li>
              <li><strong>Compare → Groups</strong> — find which APT groups match your observed TTP set</li>
              <li><strong>Compare → Campaigns</strong> — narrow down to a specific named operation</li>
              <li><strong>Gap Analysis</strong> — turn the technique gap into a structured hunt checklist</li>
              <li><strong>Export PDF</strong> — share findings as a formatted report</li>
            </ol>
          </div>
        </section>

        <section className="tm-section">
          <div className="container">
            <h2>Published Article</h2>
            <p>
              Full walkthrough of every feature published on Medium:{' '}
              <Link href="https://medium.com/@1200km/threatmapper-i-built-a-self-hosted-ai-threat-intelligence-platform-heres-how-to-use-it-0aa7673e6bd8">
                ThreatMapper: I Built a Self-Hosted AI Threat Intelligence Platform — Here's How to Use It
              </Link>
            </p>
          </div>
        </section>

        <section className="tm-section">
          <div className="container">
            <h2>Related Projects</h2>
            <div className="tm-grid">
              {[
                ['CTI Analyst Field Manual', 'Professional CTI tradecraft from collection requirements to detection-ready outputs.', 'https://anpa1200.github.io/cti-analyst-field-manual/'],
                ['CTI as a Code', 'Structured intelligence product lifecycle as versioned code.', 'https://anpa1200.github.io/CTI_as_a_Code/'],
                ['Operation Desert Hydra', 'Deep-dive threat intelligence campaign analysis.', 'https://anpa1200.github.io/operation-desert-hydra/'],
                ['Customer-Driven AI CTI', 'AI-augmented CTI delivery methodology for customer-facing teams.', 'https://anpa1200.github.io/customer-driven-ai-cti-project/'],
              ].map(([title, body, href]) => (
                <article className="tm-card" key={title}>
                  <h3>{title}</h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--ifm-color-emphasis-700)' }}>{body}</p>
                  <Link href={href}>Visit →</Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
