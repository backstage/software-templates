<!--- Use this template to create a runbook. Replace the prompt text under each section header with information relevant to your runbook. --->

# Runbook Title

## Summary

Briefly describe your system, service, or project. If you're not sure what to write, try answering these questions:

- What business or engineering need is met by this system or service?
- What kind of service is it (e.g. real-time, API, batch processing, etc.).
- Is it user-facing or internal?
- Can you explain the overall architecture including how it interacts with other system?

Link to your README.md file if that document provides a good description.

## Facts

The Facts section provides important summary information in a table. Answer these questions to complete this section. Omit an entry if it is not relevant. Add an entry if needed.

| Key                 | Description                                                                                          |
|---------------------|------------------------------------------------------------------------------------------------------|
| **Service name**     | What is the name of the service?                                                                                 |
| **Operating hours**     | How often is the service expected to run without interruption?                                       |
| **On-call hours**       | Any specific or scheduled on-call hours for this service?                                                   |
| **Backstage**           | Provide Backstage link to component here.                                                               |
| **Dashboards**          | Provide a link to the monitoring dashboard here.                                                       |
| **PagerDuty**           | Provide a PagerDuty link here.                                                                   |
| **Service level**       | What level of support/response do we provide (e.g., real-time, 1 day, 1 week)?                       |
| **Risk/Impact Summary** | What happens to upstream, downstream, or adjacent systems if this component fails?               |
| **Escalation**          | Who do I contact to get help or inform about an issue (e.g., Slack, email, JIRA, mobile numbers)? |
| **Owner contacts**      | What squad, team, or person owns this service and how can I get in touch with them?                  |

## Alert types

Can you list and describe common alerts that someone on-call is likely to see? Include information like:

- Error message text
- What the error message means
- Downstream effects
- Possible solutions

## Troubleshooting

List troubleshooting steps that someone on-call could take to resolve a problem. You could also link to incident post-mortem reports.

Information for a new service might not have anything in this section.

## Failover/recovery

Describe any steps to take to verify or ensure that a failover process takes place.

## Logging

Information that helps the on-call person find logs. Include examples of normal logs and logs that show errors.

## FAQ

Include an FAQ if it's helpful.


