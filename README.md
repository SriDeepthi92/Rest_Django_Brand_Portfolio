# Project README

A combined Django + React/Next-style frontend project for the Terracota / Tivachi rugs storefront.

## Overview
- Backend: Django (API / admin / content)
- Frontend: React (client-side components under `frontend-app/`)
- Purpose: e-commerce style product listing and storefront UI

## Repo layout
- c:\Users\sride\django\Terracota-official\
  - backend Django project (root)
  - frontend-app/ (React/Next-style frontend)
  - README.md (this file)

## Prerequisites
- Node.js >= 16 and npm or pnpm
- Python 3.8+ and pip
- Git (optional)
- (Windows) PowerShell / CMD / WSL as preferred

## Setup — Backend (Django)
1. Create & activate a virtual environment:
   - python -m venv .venv
   - .venv\Scripts\activate
2. Install dependencies:
   - pip install -r requirements.txt
3. Set environment variables (example):
   - DJANGO_SETTINGS_MODULE=your_project.settings
   - DATABASE_URL or configure settings/local DB
4. Run migrations and collect static:
   - python manage.py migrate
   - python manage.py collectstatic --noinput
5. Start dev server:
   - python manage.py runserver

## Setup — Frontend (frontend-app)
1. Change directory:
   - cd frontend-app
2. Install packages:
   - npm install
3. Run dev server:
   - npm run dev
4. Build for production:
   - npm run build
   - npm run start (if applicable / configured)

Notes:
- Many frontend components use Tailwind classes. If Tailwind is present, ensure the PostCSS/Tailwind build steps are configured.
- If the frontend is Next.js, `npm run dev` will run on localhost:3000 by default.

## Environment / Secrets
- Keep API keys and secrets out of repo.
- Use .env files or host environment variables and document keys in a local `.env.example`.

## Common commands
- Backend tests: python manage.py test
- Frontend lint: npm run lint
- Frontend tests: npm run test

## Troubleshooting
- If logo or styles don't update, clear browser cache (Ctrl+F5) and restart the dev server.
- Use browser DevTools to inspect overriding CSS rules.
- If ports conflict, change frontend (3000) or backend (8000) ports when starting servers.

## Contributing
- Create feature branches from `main`/`develop`.
- Open PRs with a short description and screenshots where relevant.
- Keep UI component changes isolated and add small, focused commits.

## License
- Add project license file (e.g., LICENSE) and update this section accordingly.

