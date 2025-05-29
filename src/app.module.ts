import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/database.config';

// eslint-disable-next-line prettier/prettier
const imports = [
  TypeOrmModule.forRoot(typeOrmConfig)
];

// eslint-disable-next-line prettier/prettier
const controllers = [
  AppController
];

// eslint-disable-next-line prettier/prettier
const providers = [
  AppService
];


@Module({
  imports: imports,
  controllers: controllers,
  providers: providers,
})
export class AppModule {}
