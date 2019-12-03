import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiUseTags , ApiOperation} from '@nestjs/swagger';

//没有路由,默认主页访问进入
@ApiUseTags('app controller', '测试程序入口')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({title: "测试服务是否启动"})
  getHello(): string {
    return this.appService.getHello();
  }
}