# Backend API - NestJS

API Gateway que recibe peticiones del frontend y las reenvía a backend-data.

## Desarrollo Local

```bash
npm install
npm run start
```

## Build Local

```bash
docker build -t comments-backend-api:local .
docker run -p 3000:3000 -e DATA_SERVICE_URL=http://localhost:3001 comments-backend-api:local
```

## Endpoints

- GET /api/comments - Lista comentarios
- POST /api/comments - Crea comentario
- GET /api/health - Health check
