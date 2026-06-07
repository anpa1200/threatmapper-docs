---
id: overview
title: API Overview
sidebar_position: 1
---

# REST API

ThreatMapper exposes a full REST API. Drive the entire workflow programmatically — headless analysis, batch comparisons, layer management.

## Base URL

```
http://localhost:8000/api
```

Interactive Swagger UI: **http://localhost:8000/docs**

## Endpoint Groups

| Group | Base path | Description |
|---|---|---|
| ATT&CK | `/attack` | Versions, tactics, techniques, technique detail |
| APT | `/apt` | Groups, campaigns, Jaccard compare |
| Analyze | `/analyze` | Submit reports, streaming SSE, session library |
| Layers | `/layers` | Save, load, list, delete named Navigator layers |
| Export | `/export` | PDF generation for analyses and layers |
| Sync | `/sync` | ATT&CK version status and manual sync trigger |
| Health | `/health` | Liveness check |

## Authentication

No authentication is built in — ThreatMapper is designed for internal/intranet use. Protect the API with nginx, Caddy, or your identity provider if you deploy it for a team. See [Security](/security).

## Content Types

- **JSON body requests**: `Content-Type: application/json`
- **File uploads**: `Content-Type: multipart/form-data`
- **Streaming responses**: Server-Sent Events (`text/event-stream`)
- **PDF responses**: `application/pdf` with `Content-Disposition: attachment`

## SSE Event Types

The streaming analysis endpoint (`POST /api/analyze/stream`) returns SSE events:

| Event type | Payload | Meaning |
|---|---|---|
| `token` | `{"content": "..."}` | LLM token streamed in real time |
| `result` | `{"data": AnalysisOut}` | Final parsed result |
| `error` | `{"message": "..."}` | LLM or DB failure |
| `done` | — | Stream completed |

---

- [Analysis endpoints →](/api/analyze)
- [Layers endpoints →](/api/layers)
- [Compare endpoints →](/api/compare)
- [Export endpoints →](/api/export)
- [Sync endpoints →](/api/sync)
