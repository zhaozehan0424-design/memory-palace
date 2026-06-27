# Security Policy

Memory Palace is a static learning page. It does not require accounts, server-side secrets, analytics keys, or private classroom data.

## Reporting

Please report security or privacy issues through the repository owner profile:

https://github.com/zhaozehan0424-design

Do not open a public issue that contains private notes, student information, account screenshots, tokens, or deployment secrets.

## Sensitive Data

Never commit:

- Private classroom materials or screenshots
- Account credentials or cookies
- Vercel project metadata
- Generated browser state
- Logs or local notes that identify real people

## Maintenance Expectations

- Keep the page static and dependency-light.
- Run `npm run check` before releases.
- Review new learning content for accuracy before publishing.
