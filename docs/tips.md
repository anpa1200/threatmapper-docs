---
id: tips
title: Tips for Analysts
sidebar_position: 10
---

# Tips for Analysts

**Calibrate your confidence threshold.** Treat < 50% confidence as noise until you validate it manually. The LLM is trying hard to find ATT&CK mappings, which means it will sometimes stretch an inference. Use the evidence snippet to sanity-check every mapping.

**Use the Gap Analysis as a hunt checklist.** When you match against an APT group in Compare, the Gap Analysis tab shows every technique in their known profile that you haven't covered. This is an excellent input for a structured hunt — you're asking *"what would we need to observe to confirm this attribution?"*

**Chain features for maximum value.** The best workflow is: AI Analysis → Inject into Navigator → Compare against APT groups → Gap Analysis → Export PDF. Each step builds on the last.

**Chat is good for detection rules.** The AI assistant is particularly strong at generating SIGMA rules, KQL queries, and Splunk SPL from ATT&CK technique IDs. Give it the full ATT&CK technique description plus context from your environment (OS, logging stack) and you'll get useful starting points rather than generic templates.

**Import your existing layers.** If your team already maintains ATT&CK Navigator layers — a "what we detect" layer, a "what we've seen" layer — import them via **↑ Import layer**. ThreatMapper will let you compare them against APT profiles and run AI chat against the techniques in the layer.

**Save named layers as investigation checkpoints.** After any significant piece of work — a completed AI analysis, a finished APT comparison, a purple-team prep layer — click **↓ Save layer** and give it a meaningful name. This takes 10 seconds and means you never lose work between sessions. Reload any saved layer instantly from **📂 Load layer**.

**Use text paste for quick triage.** You don't need a formatted document. Paste raw Slack thread text, a SIEM alert body, or a vendor advisory into the text box. The AI is good at extracting signal from noisy, informal text.

**Campaigns narrow attribution.** When Group Compare gives you a top match, switch to Campaign mode and look for a specific named operation that fits your incident's timeline and geography. A campaign match is a sharper lead than a group match.

**Use retrospective comparison.** The Reports (DB 2) mode lets you re-compare any past analysis session against the current ATT&CK dataset. After each new ATT&CK release, re-run your key investigations to see if new groups or techniques change the attribution picture.

**Context window matters for long reports.** If your report is very long (40+ pages), consider splitting it into sections and running separate analyses. LLMs have context windows and may lose detail from the middle of very long documents. ThreatMapper supports up to 50 MB files but extraction quality depends on the LLM context window.
