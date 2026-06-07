---
id: sync
title: Sync API
sidebar_position: 6
---

# Sync API

Manage ATT&CK data versioning.

## Check Status

```
GET /api/sync/status
```

Returns the current ingested version vs the latest available version for each domain.

```bash
curl http://localhost:8000/api/sync/status | python -m json.tool
```

Response:

```json
{
  "domains": [
    {
      "domain": "enterprise-attack",
      "current_version": "19.1",
      "latest_version": "19.1",
      "needs_update": false,
      "last_ingested": "2026-06-01T03:00:00Z"
    }
  ],
  "any_updates_needed": false
}
```

## Trigger Manual Sync

```
POST /api/sync/trigger
```

Queues a background sync job via Celery. The sync downloads the latest ATT&CK bundle for each configured domain and ingests it alongside the existing data — both versions remain queryable.

```bash
curl -X POST http://localhost:8000/api/sync/trigger
```

## Automatic Sync

A Celery Beat scheduler runs `check_and_sync` every day at **03:00 UTC**. It queries MITRE's GitHub for new bundle versions and ingests updates without downtime.

The sidebar footer shows:
- **Green dot** — all domains on the latest version
- **Amber pulse** — at least one domain has a newer version available

## Version Targeting

Endpoints that query ATT&CK data accept an optional `?version=19.1` parameter to target a specific ingested release.

```bash
# Compare against ATT&CK v19.0 specifically
curl -X POST "http://localhost:8000/api/apt/compare?domain=enterprise-attack&version=19.0" \
  -H "Content-Type: application/json" \
  -d '{"technique_ids": ["T1566.001", "T1059.001"]}'
```
