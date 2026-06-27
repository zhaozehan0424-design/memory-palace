# Maintenance

This document records public maintenance work for Memory Palace.

## Current Maintainer

- GitHub: `zhaozehan0424-design`
- Public repo: https://github.com/zhaozehan0424-design/memory-palace
- Production demo: https://memory-palace-five.vercel.app

## Maintenance Log

### 2026-06-27

- Added security and contribution guidelines.
- Added issue and pull request templates for bug reports, content fixes, and review notes.
- Extended `npm run check` to require the maintenance and collaboration files.

### 2026-06-26

- Added GitHub Actions CI for `npm run check`.
- Updated the public-page check to verify real UTF-8 Chinese snippets from `index.html`.
- Documented the check workflow in the README.

### 2026-06-23

- Restored the deployed Vercel learning page into the public GitHub repository.
- Added open-source project files: README, MIT license, changelog, Vercel config, `.gitignore`, and a lightweight check script.
- Documented the maintenance boundary: no private accounts, screenshots, logs, or classroom-only source material are committed.

## Regular Maintenance Checklist

- Keep the Vercel demo reachable.
- Run `npm run check` before tagging a release.
- Check the page on mobile width after content changes.
- Keep learning content accurate and avoid adding unverified answers.
- Do not commit private notes, screenshots, accounts, logs, or generated browser artifacts.

## Near-Term Backlog

- Split the large single-file page into source modules if the content grows.
- Add screenshots for README once the public page stabilizes.
- Add more material-processing review cards after manual accuracy checks.
