---
id: layers
title: Layers API
sidebar_position: 3
---

# Layers API

Manage named Navigator layers stored in DB 2.

## List Layers

```
GET /api/layers?domain=enterprise-attack
```

Returns all saved layers, optionally filtered by domain.

## Save a Layer

```
POST /api/layers
Content-Type: application/json

{
  "name": "MuddyWater Q1 indicators",
  "domain": "enterprise-attack",
  "technique_ids": ["T1566.001", "T1059.001", "T1078", "T1021.001"]
}
```

## Load a Layer

```
GET /api/layers/{layer_id}
```

Returns the layer including the full `technique_ids` array.

## Delete a Layer

```
DELETE /api/layers/{layer_id}
```

Returns 204 on success.

## Example

```bash
# List all layers
curl "http://localhost:8000/api/layers?domain=enterprise-attack" | python -m json.tool

# Save a layer
curl -X POST http://localhost:8000/api/layers \
  -H "Content-Type: application/json" \
  -d '{"name": "SolarWinds TTPs", "domain": "enterprise-attack",
       "technique_ids": ["T1566.001", "T1059.001", "T1078", "T1021.001"]}'

# Load a specific layer
LAYER_ID="550e8400-e29b-41d4-a716-446655440000"
curl "http://localhost:8000/api/layers/$LAYER_ID" | python -m json.tool

# Delete a layer
curl -X DELETE "http://localhost:8000/api/layers/$LAYER_ID"
```
