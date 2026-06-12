---
id: intro
title: Introduction
sidebar_position: 1
---

# ThreatMapper

**Current release: v0.8.5** · [Project Hub](https://1200km.com/threatmapper/) · [Public Web Workspace](https://1200km.com/threat-matrix/) · [GitHub](https://github.com/anpa1200/threatmapper)

ThreatMapper is an AI-assisted CTI-to-detection workbench for mapping threat reports to MITRE ATT&CK, comparing TTP overlap with known groups and campaigns, identifying detection gaps, and exporting analyst-ready outputs.

ThreatMapper does not perform definitive attribution. TTP overlap and Jaccard similarity are analytical signals for hypothesis generation, prioritization, and further investigation.

## Start Here

1. [Open the Project Hub](https://1200km.com/threatmapper/)
2. [Explore the Web Workspace](https://1200km.com/threat-matrix/)
3. [Read the AI Analysis workflow](/ai-analysis/overview)
4. [Review Group & Campaign Similarity](/compare/overview)
5. [Deploy the Docker version](/getting-started)
6. [Export reports and detection backlog](/generating-reports)

## Public Web Workspace

The public Web workspace is browser-native and intended for exploration. It supports matrix exploration, manual TTP layers, group-profile comparison, local workspaces, ecosystem research, coverage-gap analysis, and browser-generated exports. It does not perform LLM report extraction or backend report storage.

Do not upload confidential, customer-sensitive, classified, or internal reports to any public demo.

## Full Docker Platform

Use Docker for private AI-assisted report analysis, provider-configured LLM extraction, stored reports, campaign comparison, API access, PDF exports, and scheduled ATT&CK synchronization.

ThreatMapper is self-hosted. In Docker mode, report content is sent only to the LLM provider configured by the operator. For fully private analysis, use a local or private LLM gateway.

## ATT&CK Data Provenance

ThreatMapper uses official MITRE ATT&CK STIX bundles. The active domain, version, and generated/synchronized timestamp are shown in the relevant UI. Counts depend on the selected domain and release.

## Validation and Limitations

LLM-generated mappings may contain false positives, false negatives, or ambiguous technique assignments. Analysts must validate mappings against source evidence, procedure descriptions, telemetry requirements, and ATT&CK definitions. See [Evaluation and Analyst Validation](/evaluation).
