---
id: export
title: Export API
sidebar_position: 5
---

# Export API

## Analysis PDF

```
GET /api/export/analysis/{session_id}
```

Returns a binary PDF for an existing analysis session. Use as a direct browser link (`<a href>`) or download with curl.

```bash
curl "http://localhost:8000/api/export/analysis/$SESSION_ID" -o analysis.pdf
```

The PDF includes: cover page, executive summary, techniques table, APT attribution, tactic coverage.

## Navigator Layer PDF

```
POST /api/export/layer
Content-Type: application/json

{
  "technique_ids": ["T1566.001", "T1059.001", "T1078"],
  "domain": "enterprise-attack"
}
```

Returns a binary PDF listing all techniques in the provided set with ATT&CK IDs, names, tactics, and platforms. Does not require an analysis session.

```bash
curl -X POST http://localhost:8000/api/export/layer \
  -H "Content-Type: application/json" \
  -d '{"technique_ids": ["T1566.001", "T1059.001", "T1078"], "domain": "enterprise-attack"}' \
  -o layer.pdf
```
