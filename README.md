# 🥇ignite-lab-node-js
Ignite Lab Node.js

Microsserviço escalável com Node.js
<br><br>

# 🥈Aplicação
🎁Pasta: 'notifications-service'
<br><br>

# 🥉Backend
Aplicação moderna com:
## 📝Faker;
## 📝Jest;
## 📝TypeScript;
## 📝Redis;
## 📝NodeJs

## 📝Nest Js: 
[Ver Documentação](https://docs.nestjs.com/#installation)

```bash
# Instalação
$ npm i -g @nestjs/cli

# Criação do projeto
$ nest new project-name

# Instalação de Pacotes extras: 'class-validator' e 'class-transformer'
$ npm i class-validator class-transformer

```

Para rodar: <br> 
```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

💡Integração com o Prisma (depois de seguir os passos de instalação do Prisma): <br> 
```bash
# url
https://docs.nestjs.com/recipes/prisma

# em 'src' crie o arquivo:
prisma.service.ts
```

> No arquivo 'prisma.service.ts', cole a injeção de dependência proposta na 
documentação do NestJs:


## 📝Prisma:
```bash
# Instalação: Versão CLI, com dependência de Desenvolvimento para automatizar alguns processos, criar Migartions, etc.
$ npm i prisma -D

# Instalação: Dependência de Produção que será o pacote pra se conectar ao banco de dados propriamente dito, dentro da aplicação.
$ npm i @prisma/client

# Indicação do banco que será utilizado: SQLite.
$ npx prisma init --datasource-provider SQLite

# Rodando os Migrations de: ./prisma/schema.prisma
$ npx prisma migrate dev
## pergunta:
? Enter a name for the new migration: » create notifications

# Abre no navegador uma interface para visualização do banco de dados.
$ npx prisma studio
```



```bash
# 1:05:46 - testando o retorno nas 'notifications'
# 1:08:50 - requisição no Postman
# 1:18:46
```