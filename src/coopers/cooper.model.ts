// import {prop, getModelForClass, pre} from '@hasezoey/typegoose';
import { ApiModelProperty} from '@nestjs/swagger';
import { IsNotEmpty, Length, MaxLength } from 'class-validator';

export class CoopersDto {

    @ApiModelProperty({description: 'id的名称', required: true})
    @IsNotEmpty({message: 'id 不能为空'})
    id: number;

    @ApiModelProperty({description: 'cooper的标题', required: true})
    @IsNotEmpty({message: 'cooper的标题不能为空'})
    @Length(2, 20, {message: '请输出2 ～ 20个字符'})
    title: string;

    @ApiModelProperty({description: 'cooper的内容', required: false})
    @Length(2, 20, {message: '请输出2 ～ 100个字符'})
    content: string;
}
/**
  
import { prop, getModelForClass } from '@hasezoey/typegoose'

export class Post{
    @prop()
    title:string
    @prop()
    content:string


}
export const PostModel = getModelForClass(Post)
  
  export declare const ApiModelProperty: (metadata?: {
    description?: string;
    required?: boolean;
    type?: any;
    isArray?: boolean;
    collectionFormat?: string;
    default?: any;
    enum?: SwaggerEnumType;
    format?: string;
    in?: string;
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: boolean;
    minimum?: number;
    exclusiveMinimum?: boolean;
    maxLength?: number;
    minLength?: number;
    pattern?: string;
    maxItems?: number;
    minItems?: number;
    uniqueItems?: boolean;
    maxProperties?: number;
    minProperties?: number;
    readOnly?: boolean;
    nullable?: boolean;
    xml?: any;
    example?: any;
}) => PropertyDecorator;
 * 
*/