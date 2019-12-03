import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Cooper1Controller } from './cooper1/cooper1.controller';
import { Cooper2Controller } from './cooper2/cooper2.controller';
import { CoopersModule} from './coopers/coopers.module';

//导入其它的模块
//依赖注入
@Module({
  imports: [CoopersModule], 
  controllers: [AppController, Cooper1Controller, Cooper2Controller],
  providers: [AppService]
})
export class AppModule {}
