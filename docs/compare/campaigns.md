---
id: campaigns
title: Mode 2 — Campaigns
sidebar_position: 3
---

# Mode 2 — Campaigns (DB 1)

![Mode 2 Campaigns — ranked list of all named MITRE campaigns by similarity](/img/screenshots/30_compare_campaigns.png)

Switch to **Campaigns (DB 1)** and click **Compare vs Campaigns**. This ranks all 56+ named MITRE operations by Jaccard similarity against your current Navigator selection.

## Why Campaign Comparison Is More Precise Than Group Comparison

A group's aggregate profile is the union of everything ever attributed to them across **all operations and years**. A campaign profile is specific to one attack.

Matching your TTPs against C0024 (SolarWinds Compromise) at 40% similarity is a sharper lead than matching against G0016 (APT29) at 15% — because it means your observed techniques specifically overlap with the techniques seen in that one operation, not just the group's decade-long history.

## Campaign Detail Panel

Click any campaign in the ranked list to see:

- **Similarity score** and shared techniques highlighted
- **Full campaign technique list** with overlap indicators showing which techniques you share
- **Attribution** — which group conducted this campaign
- **Date range** of the campaign

## Named Campaigns in ATT&CK

Some well-known campaigns available for comparison:

| ATT&CK ID | Campaign Name | Attributed Group |
|---|---|---|
| C0024 | SolarWinds Compromise | APT29 |
| C0023 | Operation Ghost | APT29 |
| C0025 | 2016 Ukraine Electric Power Attack | Sandworm Team |
| C0026 | C0026 | APT41 |

Full campaign list is available via `GET /api/apt/campaigns?domain=enterprise-attack`.

## API

```bash
# Compare against campaigns
curl -X POST "http://localhost:8000/api/apt/campaigns/compare?domain=enterprise-attack&top_n=10" \
  -H "Content-Type: application/json" \
  -d '{"technique_ids": ["T1566.001", "T1059.001", "T1078", "T1021.001"]}'

# List campaigns for a specific group
curl "http://localhost:8000/api/apt/campaigns?domain=enterprise-attack&group_id=G0016"
```
