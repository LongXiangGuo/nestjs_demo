//NestJs Application构造工厂函数
import { NestFactory } from '@nestjs/core'; 
//指定给Application,用于调用不同的服务
import { AppModule } from './app.module';
//指定给Application用于构建管道类,对数据进行验证和转换
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
//用于生成nestJs应用
import { NestExpressApplication } from '@nestjs/platform-express';
//用于生成Api-Docs


import { from } from 'rxjs';

async function bootstrap() {
  //1. 初始化Application,这里通过泛型动态获取.
  //create<T extends INestApplication = INestApplication>(module: any, options?: NestApplicationOptions): Promise<T>;
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  
  //2. 配置静态资源目录.
  app.useStaticAssets('assets');

  //3. 配置模版引擎
  app.setBaseViewsDir('views');
  app.setViewEngine('ejs');

  //4. 配置Swagger设置UI文档
  const options = new DocumentBuilder()
  .setTitle('demo-api')
  .setDescription('demo for nest js api debug')
  .setVersion('1.0')
  .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);

  //5. 设置管道验证
  app.useGlobalPipes(new ValidationPipe());
  
  //6. 设置端口监听
  await app.listen(3001);

}

bootstrap();

/**
 * AOP: use middlewares
  app.useGlobalFilters;
  app.useGlobalGuards;
  app.useGlobalInterceptors;
  app.useGlobalPipes;
  app.useLogger;
  ValidationPipe;
  app.useWebSocketAdapter;
*/