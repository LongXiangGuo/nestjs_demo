import { Controller, Get, Post, Query, Body, Param, Put, Render, Response, HttpCode } from '@nestjs/common';
import { AppService } from './../app.service';
import { CoopersService } from './coopers.service';
import { ApiOperation, ApiUseTags, ApiModelProperty, ApiResponse} from '@nestjs/swagger';
import { CoopersDto } from './cooper.model';
import { get } from 'http';

@ApiUseTags('coopers')
@Controller('coopers')
export class CoopersController {

    constructor(
        private readonly appService: AppService,
        private readonly cooperService: CoopersService,
        ) {

        }

        @Get('home')
        @Render('cooper/index')
        @ApiOperation({ title: 'cooper的默认展示模版',description:'详情描述' })
        getCooperRender() {
            return {'id': 3, 'title': '国际客运中心','content': '上海市虹口区东长治路'};
        }
     
        @Get()
        @ApiOperation({ title: '获取所有的cooper信息'})
        async getCoopers() {
            return this.cooperService.getCoopers();
        }
        
        @Get('detail')
        @ApiOperation({ title: '获取所有的cooper详情,通过QueryString `id=cooperId`'})
        async getCooperDetailByQuery(@Query('id') id: string) {
            const cooperId: number = Number(id);
            return this.cooperService.getCooperDetail(cooperId);
        }

        @Get(':id') 
        @ApiOperation({ title: '获取所有的cooper详情,通过动态路由'})
        async getCooperDetailByRoute(@Param('id') id: string) {
            const cooperId: number = Number(id);
            return this.cooperService.getCooperDetail(cooperId);
        }

        @Post('create')
        @HttpCode(200)
        @ApiOperation({ title: '通过Post创建一个Cooper'}) 
        async postCooper(@Body() bodyToCreateCooperDto: CoopersDto, @Response() res ) {
            const result = await this.cooperService.addCoopers(bodyToCreateCooperDto);
            return this.cooperService.addCoopers(bodyToCreateCooperDto);
        }

        @Put('updateDetail/:id')
        @ApiOperation({ title: '通过路由去更新一个cooper信息'}) 
        async updateCooperDetail(@Param('id') id: string, @Body() bodyToUpdateCooperDto: CoopersDto ) {
            console.log('updateCooperDetail id', id);
            console.log('updateCooperDetail bodyToUpdateCooperDto', bodyToUpdateCooperDto);
            return this.cooperService.updateCoopers(bodyToUpdateCooperDto);
        }

}
