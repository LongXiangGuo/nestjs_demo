import { Controller, Get, Post, Query, Body, Param, Put, Delete,Render, Response, HttpCode, HttpException } from '@nestjs/common';
import { AppService } from './../app.service';
import { CoopersService } from './coopers.service';
import { ApiOperation, ApiUseTags, ApiResponse} from '@nestjs/swagger';
import { CoopersDto } from './cooper.model';


@ApiUseTags('coopers')
@Controller('coopers')
export class CoopersController {

    constructor(
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
        async getCoopers(): Promise<CoopersDto[]> {
            try {
                return this.cooperService.getCoopers();
            }catch (e){
                throw new HttpException(e, 404);
            } 
        }
        
        @Get('detail')
        @ApiOperation({ title: '获取所有的cooper详情,通过QueryString `id=cooperId`'})
        async getCooperDetailByQuery(
            @Query('id') id: string
            ) {
            const cooperId: number = Number(id);
            try {
                return this.cooperService.getCooperDetail(cooperId);
            }catch (e){
                throw new HttpException(e, 404);
            }
        }

        @Get(':id') 
        @ApiOperation({ title: '获取所有的cooper详情,通过动态路由'})
        async getCooperDetailByRoute(@Param('id') id: string): Promise<CoopersDto> {
            const cooperId: number = Number(id);
            try {
                return this.cooperService.getCooperDetail(cooperId);
            }catch (e){
                throw new HttpException(e, 404);
            }
        }

        @Post('create') 
        @ApiOperation({ title: '通过Post创建一个Cooper'})  
        async postCooper(@Body() bodyToCreateCooperDto: CoopersDto ): Promise<CoopersDto> {
            console.log("2352323235345");
            try{

                return this.cooperService.addCoopers(bodyToCreateCooperDto);
            } catch (e){
                throw new HttpException(e, 404);
            }
        }

        @Put('updateDetail/:id')
        @ApiOperation({ title: '通过路由去更新一个cooper信息'}) 
        async updateCooperDetail(@Param('id') id: string, @Body() bodyToUpdateCooperDto: CoopersDto ):Promise<CoopersDto> {
            try {
                return this.cooperService.updateCoopers(bodyToUpdateCooperDto);
            }catch (e){
                throw new HttpException(e, 404);
            }
        }

        @Delete('delete/:id') 
        @ApiOperation({ title: '通过id去更新一个cooper信息'}) 
        async deleteCooperById(@Param('id') id: string ): Promise<boolean> {
            const cooperId = Number(id);
            try {
                return this.cooperService.deleteCooper(cooperId);
            }catch (e){
                throw new HttpException(e, 404);
            }
        }

}
