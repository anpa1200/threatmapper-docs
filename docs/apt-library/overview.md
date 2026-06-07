---
id: overview
title: APT Library
sidebar_position: 1
---

# APT Library

The APT Library gives you a searchable, browsable view of every threat group and named campaign in the ingested ATT&CK dataset.

## Browsing Groups

Each group card shows:
- ATT&CK ID (G-number), aliases, and description
- Technique count
- Associated campaigns

Use the search box to filter by group name or alias. Type `APT29` or `Cozy Bear` — either alias resolves to the same entry.

## Group Detail: Two Tabs

Click any group to open its detail view with two tabs.

### Techniques Tab

The full aggregate TTP list for this group — the union of every technique ever attributed to them across all operations and ATT&CK versions.

Two buttons:
- **Load as my TTPs** — replaces your current Navigator selection with this group's techniques (use this for a clean comparison)
- **+ Merge into TTPs** — adds this group's techniques to your existing selection (use this to build a composite layer)
- **Overlay on Navigator** — sets the group as the overlay so the matrix shows the three-colour diff

### Campaigns (DB 1) Tab

All named operations attributed to this group. Each campaign card shows:
- Campaign name and ATT&CK ID (C-number)
- Date range of the operation
- Technique count
- Attribution note from STIX

Click to expand and see the full technique list with the use-description from STIX — the actual context describing how this technique was observed in this specific operation.

The **Add to my TTPs** button on each campaign card pushes all of that campaign's techniques into your Navigator layer — useful for building a "this specific operation's TTP fingerprint" layer.

## Load vs Merge

| Action | Button | Effect |
|---|---|---|
| Replace selection | **Load as my TTPs** | Your current selection is cleared; the group's techniques are loaded |
| Add to selection | **+ Merge into TTPs** | The group's techniques are added to what you already have |

Use **Load** when you want a clean comparison — Jaccard similarity will be 100% against the group you just loaded. Use **Merge** when building a composite layer that combines techniques from multiple sources.
