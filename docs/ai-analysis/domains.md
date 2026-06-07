---
id: domains
title: ATT&CK Domains
sidebar_position: 3
---

# Working with All Three ATT&CK Domains

![Working with all three ATT&CK domains — Enterprise, Mobile, and ICS](/img/screenshots/35_three_domains.png)

ThreatMapper supports Enterprise, Mobile, and ICS ATT&CK out of the box.

Switch domains using the **Domain** dropdown in the Navigator toolbar or the Analyze page.

## Enterprise ATT&CK

Use for traditional IT infrastructure incidents: Windows/Linux/macOS endpoints, cloud workloads, Active Directory environments.

- 641 techniques (including sub-techniques)
- 174+ named threat groups
- 56+ named campaigns

This is the default domain and the right choice for most corporate IR and CTI work.

## Mobile ATT&CK

Covers Android and iOS threat behaviours. Useful for incidents involving mobile device management (MDM) bypass, spyware, or mobile-targeting APT campaigns.

## ICS ATT&CK

Covers operational technology and industrial control systems. Use for incidents involving SCADA, PLCs, HMIs, or critical infrastructure attacks.

## Domain Isolation

Each domain has its own set of tactics, techniques, and APT groups. When you run an AI analysis, select the appropriate domain so:

1. The LLM extraction is constrained to the correct technique namespace
2. The Jaccard comparison runs against groups known for activity in that domain
3. Navigator layers are correctly tagged to the domain

Saved layers are domain-tagged. Loading a layer from a different domain will show a warning.

## Downloading Only One Domain

If you only need Enterprise ATT&CK, set this in `.env` before starting:

```env
ATTCK_DOMAINS=enterprise-attack
```

This downloads ~35 MB instead of ~105 MB and completes ingestion in 2–5 minutes.
