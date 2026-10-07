# Modern CRM Template

---

Plantilla de sistema CRM para construir soluciones de CRM personalizadas, sobre una base de código en común.
*Proyecto en desarrollo*

## Stack utilizadas
Next.JS (App Router) | React | Typesript | Tailwind
NestJS | PostgreSQL | Docker | ORM Prisma

## Ejecución
### Requisitos
- Node.JS LTS
- Docker

#### Clonar el repositorio e instalar dependencias
```
git clone https://github.com/osx-mn/modern-crm-template.git
cd modern-crm-template
npm install --prefix ./apps/api
npm install --prefix ./apps/web
```

#### Configurar las variables de entorno
Copiar el archivo '.env.example' a 'apps/api' y renombrarlo como .env, generar un JWT_SECRET y pegarlo en el archivo .env

En 'apps/web' en el archivo .env.local, el campo API_URL debe contener el enlace al backend.

#### Configurar la base de datos
```
docker compose up -d db
cd apps/api
npx prisma migrate dev
```

#### Levantar cada una de las apps

apps/api, levantar con npm 'run start:dev'
apps/web, levantar con 'npm run dev'