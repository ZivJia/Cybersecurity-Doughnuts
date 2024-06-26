The Cybersecurity checklist for fullstack software engineers

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to view your current cybersecurity score.

Click into each module and check on things you already adopted.

The overall progress will be changed whenever you mark the item as done. This is a great handbook for you when doing fullstack development.
For different projects you own, I highly suggest you create a cybersecurity measurement in the UI for it, so that you can always come back and refer to it.

The goal is to Close the Doughnuts!


### Areas of focus:

#### Infrastructure Set Up
1. Give minimal access rights for co-workers on infra
2. Have Infrastructure as Code (IaC) setup to reduce human mistakes
3. Have you configuration and database backups set up
4. Enable all logging for the infrastructure service you use
5. Build a Runbook for disaster recovery when the infrastructure is down.
6. Have the Web Application Firewalls (WAF) set up
7. Only allow traffic from known IP ranges
8. Disable insecure protocols like telnet and SNMP

#### Deployment Pipeline Recommendations
1. Make sure only necessary people has access to CI/CD credentials
2. Set up vulnerability scanner, so you get notified if any of your dependencies are vulnerable.
3. Gitleak scanner integration
4. Checkov integrations
5. Syft Software Bill of Materials integration
6. Semgrep integration

#### Backend Development Checklist
1. Verify the user with every request, using specialized authentication server
2. API should have authorization built up against the requester
3. API key access should have roles that ties to authorization
4. API keys should be rotated with fixed amount of time
5. Be aware of SQL injections
6. Always upgrade http to https if possible
7. Use most up to date credential generating algorithms
8. Never store credentials in plain text
9. Strict input validation is in place
10. Use technologies like PGP encryption for files
11. Scan random uploaded files
12. Implement a good logger
13. Produce logs for every access temptation
14. Hooks logs into SIEM systems
15. Never hardcode sensitive information

#### Frontend Development Checklist
1. Be aware of Cross-Site Scripting (XSS)
2. Be aware of Cross-Site Request Forgery (CSRF)
3. Avoid allowing third party cookie whenever possible
4. Authenticate the user before granting access
5. Strict input validation for form submission
6. Set timeouts for browser sessions
7. Avoid using any sensitive identifier in the URL parameters
8. Never hardcode sensitive information


## Learning Material
Coursera       https://www.coursera.org/
PortSwigger    https://portswigger.net/
Zenarmor       https://www.zenarmor.com/
OKTA           https://developer.okta.com/
GitHub         https://github.blog/2022-02-02-build-ci-cd-pipeline-github-actions-four-steps/
Checkov        https://www.checkov.io/

## Future and Ongoing
This Repository is established by my own experience, from online learnings and lectures. With more experience accumulated, these security measures will be updated and newest recommendations will be provided.
I recommend to transfer your previous measurements into the most up-to-date one.
