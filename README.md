# Marsh NestJS

Read NestJS basic setup README [here](./docs/README.md)


## Project Setup

```
$ npm install
```

## Run Options


```
$ npm run start

$ npm run start:dev

$ npm run start:prod
```


## Swagger

`src/main.ts`에서 설정 변경
``` typescript
  // Swagger
  const options = new DocumentBuilder()
    .setTitle(`Marsh's NestJS REST API Project`)
    .setDescription(`Basic template for a RESTful API project NestJS`)
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('swagger-ui', app, document);
```


## JWT Security

*Under Construction*


## Database

*Under Construction*