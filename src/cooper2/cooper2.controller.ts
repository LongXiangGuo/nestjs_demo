import { Controller, Get, Render,Response ,Request} from '@nestjs/common';
import { ApiUseTags, ApiOperation} from '@nestjs/swagger';


@ApiUseTags('cooper模版2')
@Controller('cooper2')
export class Cooper2Controller {

    @Get()
    @Render('cooper/cooper2')
    cooper2DefaultTemplate() {
         
    }
}
