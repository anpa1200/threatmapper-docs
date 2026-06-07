---
id: compare
title: Compare API
sidebar_position: 4
---

# Compare API

Jaccard similarity ranking against ATT&CK groups and campaigns.

## Compare Against Groups

```
POST /api/apt/compare?domain=enterprise-attack&top_n=10&version=19.1
Content-Type: application/json

{
  "technique_ids": ["T1566.001", "T1059.001", "T1078", "T1021.001", "T1003.001"]
}
```

Returns a ranked list of ATT&CK groups by Jaccard similarity.

```bash
curl -X POST "http://localhost:8000/api/apt/compare?domain=enterprise-attack&top_n=5" \
  -H "Content-Type: application/json" \
  -d '{"technique_ids": ["T1566.001", "T1059.001", "T1078", "T1021.001"]}' \
  | python -m json.tool
```

## Compare Against Campaigns

```
POST /api/apt/campaigns/compare?domain=enterprise-attack&top_n=10
Content-Type: application/json

{
  "technique_ids": ["T1566.001", "T1059.001", "T1078"]
}
```

Returns a ranked list of named campaigns by Jaccard similarity.

```bash
curl -X POST "http://localhost:8000/api/apt/campaigns/compare?domain=enterprise-attack&top_n=10" \
  -H "Content-Type: application/json" \
  -d '{"technique_ids": ["T1566.001", "T1059.001", "T1078", "T1021.001"]}'
```

## List Groups

```
GET /api/apt/groups?domain=enterprise-attack&search=APT29
```

## Group Detail

```
GET /api/apt/groups/{group_id}?domain=enterprise-attack
```

## List Campaigns

```
GET /api/apt/campaigns?domain=enterprise-attack&group_id=G0016
```

Filter by `group_id` to get only campaigns attributed to a specific group.

## Campaign Detail

```
GET /api/apt/campaigns/{campaign_id}?domain=enterprise-attack
```

## Re-compare a Stored Report

```
POST /api/analyze/sessions/{session_id}/compare?top_n=10
```

Re-runs Jaccard against all current ATT&CK groups using the stored session's extracted techniques. No LLM call required.
