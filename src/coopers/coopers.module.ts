import { Module } from '@nestjs/common';
import { CoopersController } from './coopers.controller';
import { CoopersService } from './coopers.service';
import { AppService } from '../app.service';

@Module({
    controllers: [CoopersController],
    providers: [AppService, CoopersService],
})
export class CoopersModule {}
