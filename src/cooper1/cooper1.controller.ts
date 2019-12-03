import { Controller, Get, Body, Response, Render, Post } from '@nestjs/common';
import { ApiUseTags, ApiOperation} from '@nestjs/swagger';

@Controller('cooper1')
@ApiUseTags('cooper模版1')
export class Cooper1Controller {

    @Get()
    @ApiOperation({title: "测试 cooper1 默认模版内容"})
    @Render('cooper/cooper1')
    cooper1Template() {

    }

    @Post('addCooper')
    @ApiOperation({title: "测试 cooper1模版页面添加模版时自动跳转"})
    addCooper(@Body() body, @Response() res) {
        console.log(body);
        res.redirect('/cooper2');
    }

}
