---
id: intro
title: Introduction
sidebar_position: 1
---

# ThreatMapper

**Current release: v0.7.0** · [Open the live intelligence workspace](https://1200km.com/threat-matrix/) · [View source on GitHub](https://github.com/anpa1200/threatmapper)

ThreatMapper is the primary 1200km CTI-to-detection platform. The live workspace provides
immediate actor, ATT&CK technique, report, hunting, mitigation, and coverage research without
installation. The self-hosted platform adds AI-assisted report analysis, campaign comparison,
stored investigations, APIs, and private deployment.

The Docker platform is the superset product: it includes the public web analyst workflow
plus AI report extraction, private report sessions, campaigns, server-saved layers, APIs,
PDF exports, and automated ATT&CK synchronization.

*Map adversary behaviour to MITRE ATT&CK in seconds, compare against 174+ APT groups, and generate PDF reports — all running locally with your own LLM keys.*

![ThreatMapper platform overview](/img/screenshots/01_cover.png)

---

## The Problem

![The manual ATT&CK mapping problem — slow, repetitive, fragmented](/img/screenshots/03_the_problem.png)

Every threat intelligence analyst knows the workflow: you receive a malware report, an IR summary, or a threat feed entry, and you need to translate it into ATT&CK technique IDs so you can slot it into a detection backlog or a purple-team plan.

Doing this manually is slow. You read the report, recognise a behaviour ("the implant used scheduled tasks for persistence"), pull up the ATT&CK website, search for the technique, copy the ID. Repeat 20 times for a single report. Then someone asks: *"Does this look like APT29?"* — and you start manually cross-referencing technique lists.

There are commercial platforms that do this — but they are expensive, require data to leave your environment, and often treat ATT&CK as a secondary feature behind proprietary kill-chains.

**ThreatMapper** is a self-hosted, privacy-first, open-source option that uses the LLM API keys you already have.

---

## What It Does

![ThreatMapper — AI analysis with streamed technique extraction](/img/screenshots/04_what_it_does_1.png)

In one sentence: **you give it a threat report, it gives you ATT&CK technique IDs, APT group matches, confidence scores, and a PDF.**

Concretely:

![APT Attribution — Jaccard similarity ranking against all 174+ groups](/img/screenshots/05_what_it_does_2.png)

**AI Analysis** — upload a PDF, DOCX, or TXT file (or paste text), pick Claude, GPT-4o, or Gemini, and get a streamed extraction of every ATT&CK technique the LLM identifies with evidence snippets and confidence scores.

![ATT&CK Navigator — interactive heatmap of the full matrix](/img/screenshots/06_what_it_does_3.png)

**ATT&CK Navigator** — an interactive heatmap of the full ATT&CK matrix (Enterprise, Mobile, ICS) where you build and explore your TTP layer.

![APT Attribution — automatic Jaccard similarity ranking against 174+ groups and 56+ campaigns](/img/screenshots/07_what_it_does_4.png)

**APT Attribution** — automatic Jaccard similarity ranking of every extraction against 174+ named ATT&CK threat groups and 56+ named campaigns (e.g. "Operation Ghost", "SolarWinds Compromise").

![Compare — deep side-by-side comparison with matrix diff and gap analysis](/img/screenshots/08_what_it_does_5.png)

**Compare Modes** — deep side-by-side comparison of your TTP set against groups, MITRE named campaigns, or your own stored report library; with visual matrix diff, tactic breakdown chart, and gap analysis.

![PDF Reports — multi-page formatted output for executive briefings](/img/screenshots/09_what_it_does_6.png)

**PDF Reports** — ATT&CK Navigator-compatible JSON layers and multi-page PDF reports suitable for executive briefings.

Everything runs locally in Docker. Your threat reports never leave your machine.

![REST API and Swagger UI — full headless access for CI and batch workflows](/img/screenshots/10_what_it_does_7.png)

**REST API** — full headless access for CI integration and batch workflows.

---

## Architecture in Brief

ThreatMapper is four containers:

![ThreatMapper architecture diagram — four containers](/img/screenshots/11_architecture.png)

```
React / Vite frontend  ←→  FastAPI backend  ←→  PostgreSQL
                                  ↕
                           Redis + Celery
                        (background jobs, daily ATT&CK sync)
```

The backend ingests ATT&CK STIX 2.1 bundles directly from MITRE's GitHub repository using pure Python — no third-party ATT&CK library, fully compatible with Python 3.12. All three domains (Enterprise, Mobile, ICS) are parsed and stored in PostgreSQL.

LLM calls go directly from the FastAPI backend to Anthropic / OpenAI / Google using their official SDKs. Your API keys never touch a third-party service beyond the LLM provider itself.

---

## Next

- [Set up in 10 minutes →](/getting-started)
- [Core workflow: AI Analysis →](/ai-analysis/overview)
