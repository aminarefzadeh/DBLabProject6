import {Length, IsOptional, Min, IsNumber} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class PersonDto {
    
    @Length(3, 10)
    @ApiProperty({description: 'Enter your name >', minLength: 3, maxLength: 10, default: 'Amin'})
    name: string;
    
    @IsNumber()
    @IsOptional()
    @Min(1960)
    @ApiPropertyOptional({description:'Optional‫‪', default: 1997, minimum:1960})
    year: number;
}