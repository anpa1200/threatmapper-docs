---
id: operations-overview
title: Operational Intelligence Workbench
sidebar_position: 1
---

# Operational Intelligence Workbench

ThreatMapper v0.7.0 adds persistent operational workflows beyond ATT&CK exploration.
Open **Operations** from the Docker platform sidebar.

## Investigations

Create campaign or incident workspaces containing:

- Actors, TTPs, and linked reports
- Evidence graph nodes and relationships
- Timeline events and analyst status
- Current Navigator selection and actor overlay as starting context

Evidence relationships should preserve provenance and distinguish observed, reported,
inferred, and rejected claims.

## Report Intake

Queue CTI/IR reports for analyst review. Track publisher, source URL, source reliability,
actors, TTPs, indicators, notes, and review state:

`pending → reviewing → promoted/rejected`

## Tracked Actors

Snapshot an actor directly from the APT Library. Subsequent snapshots record added and
removed TTPs, creating an explainable behavioral change log.

## Detection Lifecycle

Manage detection candidates through:

`idea → hunt → draft → validation → production → retired`

Each candidate records its ATT&CK technique, owner, telemetry, query language, query,
source references, and validation notes.

## API

Operational APIs are available under `/api/operations`:

- `/investigations`
- `/intake`
- `/detections`
- `/tracked-actors`
