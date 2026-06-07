---
id: analyze
title: Analysis API
sidebar_position: 2
---

# Analysis API

## Submit a Report

```
POST /api/analyze
Content-Type: multipart/form-data
```

| Field | Type | Default | Description |
|---|---|---|---|
| `provider` | string | `claude` | `claude`, `openai`, or `gemini` |
| `domain` | string | `enterprise-attack` | ATT&CK domain |
| `name` | string | — | Optional label for the session |
| `text` | string | — | Raw text to analyse |
| `file` | file | — | PDF, DOCX, or TXT upload |

Either `text` or `file` must be provided.

### Example

```bash
curl -X POST http://localhost:8000/api/analyze \
  -F "provider=claude" \
  -F "domain=enterprise-attack" \
  -F "file=@incident_report.pdf" \
  | python -m json.tool
```

### Response (AnalysisOut)

```json
{
  "session_id": "550e8400-e29b-41d4-a716-446655440000",
  "provider": "claude",
  "model": "claude-opus-4-8",
  "summary": "The report describes a spearphishing campaign ...",
  "techniques": [
    {
      "attack_id": "T1566.001",
      "name": "Spearphishing Attachment",
      "tactic": "initial-access",
      "confidence": 0.95,
      "evidence": "the email contained a malicious Excel attachment"
    }
  ],
  "apt_matches": [
    {
      "group_attack_id": "G0016",
      "group_name": "APT29",
      "similarity": 0.34,
      "shared_count": 8,
      "shared_techniques": ["T1566.001", "T1059.001"]
    }
  ],
  "apt_hints": ["APT29", "Cozy Bear"]
}
```

## Streaming Analysis

```
POST /api/analyze/stream
Content-Type: multipart/form-data
```

Same fields as `/analyze`. Returns Server-Sent Events. See [SSE event types](/api/overview#sse-event-types).

### Python Example

```python
import httpx, json

with httpx.stream(
    "POST",
    "http://localhost:8000/api/analyze/stream",
    data={"provider": "claude", "domain": "enterprise-attack"},
    files={"file": open("report.pdf", "rb")},
    timeout=300,
) as r:
    for line in r.iter_lines():
        if line.startswith("data: "):
            event = json.loads(line[6:])
            if event["type"] == "token":
                print(event["content"], end="", flush=True)
            elif event["type"] == "result":
                print("\n\nFinal techniques:")
                for t in event["data"]["techniques"]:
                    print(f"  {t['attack_id']} ({t['confidence']*100:.0f}%) - {t['name']}")
```

## List Sessions

```
GET /api/analyze/sessions?limit=50&offset=0
```

Returns a list of all completed analysis sessions (DB 2), newest first.

## Re-compare a Session

```
POST /api/analyze/sessions/{session_id}/compare?top_n=10
```

Re-runs Jaccard comparison for a stored session against all current ATT&CK groups. Useful after a new ATT&CK version is ingested.

## Delete a Session

```
DELETE /api/analyze/sessions/{session_id}
```

Permanently removes the session and its results from DB 2. Returns 204 on success.

## Get Session Result

```
GET /api/analyze/{session_id}
```

Returns the full `AnalysisOut` for a stored session.
