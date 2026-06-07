---
id: layers
title: Named Layers
sidebar_position: 2
---

# Saving and Loading Named Layers

![Named layers library — save and reload any investigation](/img/screenshots/25_navigator_layers.png)

Once you have built a TTP layer — through AI analysis, manual selection, or an APT campaign overlay — you can save it to the database with a name and reload it in any future session.

## Why This Matters

Without persistence, every session starts blank. Named layers let you:

- **Bookmark a specific investigation.** Save "Lazarus Q1 2025 incident" at 47 techniques and return to it a week later exactly where you left off.
- **Build a fingerprint library.** Save a layer for each major campaign you track — "Operation Ghost TTPs", "SolarWinds Compromise TTPs" — and reload any of them for comparison without re-running AI analysis.
- **Maintain a baseline.** Keep a "What we detect" layer with your detection coverage and a "What we've seen" layer of your observed incidents.
- **Share work across team members.** Layers are stored in the shared PostgreSQL database, so a layer saved by one analyst is visible to all.

## Saving a Layer

1. Select your techniques in Navigator (they turn red)
2. Click **↓ Save layer** in the toolbar — this button appears only when at least one technique is selected
3. Enter a descriptive name (e.g. *"MuddyWater CTI analysis — April 2025"*)
4. Press Enter or click **Save**

The layer is immediately written to the database. The technique IDs are stored in sorted, deduplicated form together with the domain.

## Loading a Layer

1. Click **📂 Load layer** in the toolbar (always visible)
2. A list of all saved layers appears, each showing the name, technique count, domain, and last-modified date
3. Click **Load** — the saved layer **replaces** your current selection entirely

:::note
Loading replaces your current selection. If you want to merge a saved layer into your existing techniques instead, use the APT Library's **+ Merge into TTPs** button workflow, not the Load dialog.
:::

## Deleting a Layer

In the Load dialog, click the **✕** button next to any layer and confirm the deletion. This permanently removes the layer from DB 2.

## Manage Layers via API

```bash
# List all saved layers
curl "http://localhost:8000/api/layers?domain=enterprise-attack" | python -m json.tool

# Save a layer
curl -X POST http://localhost:8000/api/layers \
  -H "Content-Type: application/json" \
  -d '{"name": "MuddyWater Q1 indicators", "domain": "enterprise-attack",
       "technique_ids": ["T1566.001", "T1059.001", "T1078", "T1021.001"]}'

# Load a specific layer
LAYER_ID="550e8400-e29b-41d4-a716-446655440000"
curl "http://localhost:8000/api/layers/$LAYER_ID" | python -m json.tool

# Delete a layer
curl -X DELETE "http://localhost:8000/api/layers/$LAYER_ID"
```
