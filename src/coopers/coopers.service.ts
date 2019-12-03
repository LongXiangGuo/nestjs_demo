import { Injectable } from '@nestjs/common';
import { CoopersDto } from './cooper.model';
import { Length, IsNotEmpty } from 'class-validator';
import { Int32 } from 'bson';
import { is } from '@babel/types';
@Injectable()
export class CoopersService {

    static coopers: CoopersDto[] = [];

    async getCoopers(): Promise<CoopersDto[]> {
        const cooper = new CoopersDto();
        if (CoopersService.coopers.length === 0){
           return Promise.resolve([]);
        } else {
            return Promise.resolve(CoopersService.coopers);
        }
    }

    async getCooper(id: Int32 ): Promise<CoopersDto> {
        const length = CoopersService.coopers.length;
        if (length === 0) {
            return Promise.reject('cooper was null');
        } else {
            const cooper =  CoopersService.coopers[length - 1];
            return Promise.resolve(cooper);  
        }
    }

    async getCooperDetail(id: Int32 ): Promise<CoopersDto> {
        const length = CoopersService.coopers.length;
        if (length === 0) {
            return Promise.reject('cooper was null');
        } else {
            const cooper =  CoopersService.coopers[length - 1];
            cooper.content = 'this is cooper detial';
            return Promise.resolve(cooper);  
        }
    }

    async addCoopers(cooper: CoopersDto): Promise<boolean> {
        CoopersService.coopers.push(cooper);
        return Promise.resolve(true);
    }

    async deleteCoopers(id: Int32 ): Promise<boolean> {
        CoopersService.coopers.pop();
        return Promise.resolve(true);
    }

    async updateCoopers(cooper: CoopersDto): Promise<boolean> {
        CoopersService.coopers.pop();
        CoopersService.coopers.push(cooper);
        return Promise.resolve(true);
    }
} 

