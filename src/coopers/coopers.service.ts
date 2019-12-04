import { Injectable, HttpException } from '@nestjs/common';
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

    async getCooper(id: number ): Promise<CoopersDto> {
        const length = CoopersService.coopers.length;
        if (length === 0) {
            throw new HttpException("cooper was null", 404);
        } else {
            for (let cooper of CoopersService.coopers) {
                if (cooper.id == id ){
                  return Promise.resolve(cooper);  
                }
            } 
            throw new HttpException("could not found the cooper with $id", 404);
        }
    }

    async getCooperDetail(id: number ): Promise<CoopersDto> {
        const length = CoopersService.coopers.length;
        if (length === 0) {
            throw new HttpException("cooper was null", 404);
        } else {
            for (let cooper of CoopersService.coopers) {
                if (cooper.id == id ){
                  return Promise.resolve(cooper);  
                }
            } 
            throw new HttpException("could not found the cooper with $id", 404);
        }
    }

    async addCoopers(cooper: CoopersDto): Promise<CoopersDto> {
        for (let _cooper of CoopersService.coopers) {
            if (_cooper.id == cooper.id ){
              throw new HttpException("add cooper failed, there is already have a cooper", 404);
            }
        } 
        CoopersService.coopers.push(cooper);
        return  Promise.resolve(cooper);
    }

    async deleteCooper(id: number ): Promise<boolean> {
        for (let _cooper of CoopersService.coopers) {
            if (_cooper.id == id){
               const index = CoopersService.coopers.indexOf(_cooper);
               CoopersService.coopers.splice(index,1);
               return Promise.resolve(true);
            }
        } 
         throw new HttpException("delete cooper failed, cooper is not exist", 404);
    }

    async updateCoopers(cooper: CoopersDto): Promise<CoopersDto> {
        for (let _cooper of CoopersService.coopers) {
            if (_cooper.id == cooper.id){
               const index = CoopersService.coopers.indexOf(cooper);
               CoopersService.coopers[index] = cooper;
              return Promise.resolve(cooper);
            }
        } 
        throw new HttpException("could not found cooper in db to update",404);
    }
} 

