# Setup
## Nuxt
```bash
npx nuxi@latest init nuxt-drizzle-orm-demo
```
## Drizzle ORM
```bash
npm i drizzle-orm
npm i -D drizzle-kit
```

## DB
```bash 
npm i postgres
docker run -p 127.0.0.1:5432:5432 --name local-postgres -e POSTGRES_USER=root -e POSTGRES_PASSWORD=root -d postgres
```

```bash
npm i mysql2
docker run -p 127.0.0.1:3306:3306  --name local-mariaDB -e MARIADB_ROOT_PASSWORD=root -d mariadb:latest
```