---
id: intro
title: Introduction
sidebar_position: 1
---

# ThreatMapper

*Map adversary behaviour to MITRE ATT&CK in seconds, compare against 174+ APT groups, and generate PDF reports — all running locally with your own LLM keys.*

---

## The Problem

Every threat intelligence analyst knows the workflow: you receive a malware report, an IR summary, or a threat feed entry, and you need to translate it into ATT&CK technique IDs so you can slot it into a detection backlog or a purple-team plan.

Doing this manually is slow. You read the report, recognise a behaviour ("the implant used scheduled tasks for persistence"), pull up the ATT&CK website, search for the technique, copy the ID. Repeat 20 times for a single report. Then someone asks: *"Does this look like APT29?"* — and you start manually cross-referencing technique lists.

There are commercial platforms that do this — but they are expensive, require data to leave your environment, and often treat ATT&CK as a secondary feature behind proprietary kill-chains.

**ThreatMapper** is a self-hosted, privacy-first, open-source option that uses the LLM API keys you already have.

---

## What It Does

In one sentence: **you give it a threat report, it gives you ATT&CK technique IDs, APT group matches, confidence scores, and a PDF.**

| Feature | Description |
|---|---|
| **AI Analysis** | Upload PDF/DOCX/TXT or paste text → streamed LLM extraction of ATT&CK techniques with evidence snippets and confidence scores |
| **ATT&CK Navigator** | Interactive heatmap of Enterprise, Mobile, and ICS matrices; build, save, and reload named TTP layers |
| **APT Attribution** | Jaccard similarity ranking against 174+ named threat groups and 56+ named campaigns |
| **Compare Modes** | Deep side-by-side comparison with visual matrix diff, tactic breakdown, and gap analysis |
| **PDF Reports** | Multi-page formatted reports for analysis sessions and Navigator layers |
| **REST API** | Full headless access for CI integration and batch workflows |

Everything runs locally in Docker. Your threat reports never leave your machine.

---

## Architecture

ThreatMapper is four containers:

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
