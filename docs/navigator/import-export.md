---
id: import-export
title: Import & Export
sidebar_position: 3
---

# Import & Export

## Import an Existing Layer

If your team already maintains ATT&CK Navigator layers, click **↑ Import layer** and upload the JSON. ThreatMapper loads it as your active layer, which you can then enrich with AI analysis or compare against APT profiles.

The import supports the standard ATT&CK Navigator `.json` layer format (versions 4.x).

## Export Options

All export buttons are in the Navigator toolbar and appear when at least one technique is selected.

| Button | Output | Use for |
|---|---|---|
| **↓ PDF** | Multi-page PDF report | Purple-team deliverable, rapid sharing |
| **↓ Navigator layer** | ATT&CK Navigator–compatible JSON | Loading into MITRE Navigator, sharing with other tools |
| **↓ JSON** | Plain list of technique IDs | Programmatic use, pasting into other systems |

### Navigator Layer JSON

Compatible with the [MITRE ATT&CK Navigator](https://mitre-attack.github.io/attack-navigator/). The exported file includes colour coding:

- **Red** — techniques in your layer
- **Blue** — techniques in the active overlay (APT group)
- **Amber** — techniques in both

### PDF Layer Report

Lighter than the full analysis PDF — lists all techniques in your current layer with ATT&CK IDs, tactics, and platforms. Useful as a rapid deliverable for a purple-team session or a detection engineering sprint.

Generated on the backend via `POST /api/export/layer`. No analysis session required — it works on the current live selection.
