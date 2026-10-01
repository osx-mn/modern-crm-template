# modern-crm-template — recetas (shell-agnóstico)

default:
    just --list

# ── Setup (crear el template desde cero) ──────────────

# Crea el frontend (Next.js)
setup-web:
    npx create-next-app@latest apps/web --ts --eslint --tailwind --app --src-dir --turbopack --import-alias "@/*" --use-npm

# Crea el backend (NestJS, sin git propio, CJS)
[working-directory: 'apps']
setup-api:
    npx @nestjs/cli new api --skip-git --package-manager npm

# Instala dependencias de ambas apps
install: install-api install-web

[working-directory: 'apps/api']
install-api:
    npm install

[working-directory: 'apps/web']
install-web:
    npm install

# ── Día a día ─────────────────────────────────────────

# Levanta PostgreSQL (docker)
db:
    docker compose up -d db

# Detiene PostgreSQL
db-down:
    docker compose down

# Estado de la BD
db-status:
    docker compose ps

# API en modo dev (puerto 4000)
[working-directory: 'apps/api']
api:
    npm run start:dev

# Frontend en modo dev (puerto 3000)
[working-directory: 'apps/web']
web:
    npm run dev

# ── Prisma ────────────────────────────────────────────

# Aplica migraciones (crea nueva si hay cambios en schema)
[working-directory: 'apps/api']
migrate:
    npx prisma migrate dev

# Genera el cliente Prisma
[working-directory: 'apps/api']
generate:
    npx prisma generate

# Explorador visual de la BD (puerto 5555)
[working-directory: 'apps/api']
studio:
    npx prisma studio