---
id: functionality-parity
title: Docker vs Web Functionality
sidebar_position: 3
---

# Docker vs Web Functionality

The Docker platform is the superset product: it contains the public ThreatMapper Web
analyst workflow plus private/server capabilities and AI functions.

| Capability | Web | Docker |
|---|---:|---:|
| ATT&CK matrix, actor overlays, group comparison | Yes | Yes |
| Correlated CTI/IR reports and ecosystem resources | Yes | Yes |
| Detection, mitigation, hunting, hunt-plan export | Yes | Yes |
| Evidence, confidence, mapping, notes, maturity | Yes | Yes |
| Coverage overlay and detection-backlog export | Yes | Yes |
| Investigation workspaces and report export | Yes | Yes |
| Global actor/TTP/report search and discovery | Yes | Yes |
| AI report extraction | No | Yes |
| LLM technique assistant | No | Yes |
| Private stored report sessions | No | Yes |
| Campaign ingestion and comparison | No | Yes |
| PostgreSQL saved layers, APIs, PDF export | No | Yes |
| Automated ATT&CK synchronization | No | Yes |
| Native MITRE ATLAS matrix | Yes | Planned adapter |

Docker embeds and cross-links the Anomaly Detection Atlas reference book. Native MITRE
ATLAS PostgreSQL ingestion remains the only architecture-level parity gap because ATLAS
requires a dedicated adapter outside the existing Enterprise/Mobile/ICS ATT&CK pipeline.
