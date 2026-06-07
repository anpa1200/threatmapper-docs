---
id: two-databases
title: Two Databases
sidebar_position: 8
---

# Two Databases: Actor Profiles and Your Report Library

ThreatMapper maintains two separate databases that feed the Compare workflow.

## DB 1: MITRE Actor Profiles and Named Campaigns

Populated automatically on first startup by ingesting the ATT&CK STIX 2.1 bundle from MITRE's GitHub repository.

The STIX bundle contains more than just group TTP profiles. It also includes:

- **`campaign` objects** — named operations with their own ATT&CK IDs (C0023 = "Operation Ghost", C0025 = "2016 Ukraine Electric Power Attack")
- **`attributed-to` relationships** — which group conducted which campaign
- **`uses` relationships at the campaign level** — the specific techniques observed in each named operation

ThreatMapper parses all of this during ingestion. The result is two searchable, comparable datasets that both live in DB 1:

| Dataset | What it contains | ID format |
|---|---|---|
| APT Groups | Aggregate TTP profile of each named threat group | G0001 – G0174+ |
| Campaigns | TTP profile of each named operation | C0001 – C0063+ |

DB 1 is read-only from the user's perspective. It is updated by the daily ATT&CK sync job (or manually via `POST /api/sync/trigger`).

## DB 2: Your Report Library

Every time you run an AI analysis, the result is stored: the extracted techniques, the summary, the APT matches, and the provider/model used. DB 2 is this library of past analyses.

DB 2 also stores named Navigator layers saved via the **↓ Save layer** button.

| Table | What it stores |
|---|---|
| `analysis_sessions` | Session metadata: provider, model, domain, filename, status, timestamp |
| `analysis_results` | Extracted techniques, summary, APT matches (JSONB) |
| `user_layers` | Named Navigator layers: name, domain, technique IDs (JSONB) |

DB 2 is append-mostly. Sessions can be deleted via the **✕ Remove** button in Compare → Reports or via `DELETE /api/analyze/sessions/{id}`. Layers can be deleted via the Load dialog or via `DELETE /api/layers/{id}`.

## The Three Compare Modes

| Mode | Source of "your" TTPs | Compared against |
|---|---|---|
| Groups | Navigator selection | DB 1: all groups |
| Campaigns | Navigator selection | DB 1: all campaigns |
| Reports | DB 2: a stored session | DB 1: all groups |

This means you can compare any combination — your current layer against groups, your current layer against campaigns, or a stored report from three months ago against the latest ATT&CK group data.
