import { Controller, Post, Body, Get, Header, Query, UseGuards } from '@nestjs/common';
import { HelloService } from './hello.service'
import {PersonDto} from './dto/person.dto'
import { INSTANCE_METADATA_SYMBOL } from '@nestjs/core/injector/instance-wrapper';
import { isIdentityCard } from 'class-validator';
import {ApiResponse,ApiBearerAuth, ApiQuery } from '@nestjs/swagger'
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('hello')
export class HelloController {
    constructor (private readonly helloService: HelloService) {}

    @ApiResponse({status:200, description: 'Say Hello!!'})
    @Post('welcome')
    @Header('Content-Type', 'application/json')
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    async sayWelcome(@Body() personDto:PersonDto): Promise<{data: string}> {
        let msg = await this.helloService.welcome(personDto);
        return {data: msg};
    }

    @ApiResponse({status:200})
    @ApiQuery({name: 'name', required: true, type: String})
    @ApiQuery({name: 'year', required: false, type: Number, description: 'you can ignore this'})
    @Get('welcome')
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    async sayWelcome2(@Query('name') Iname, @Query('year') Iyear): Promise<{data: string}> {
        let msg = await this.helloService.welcome({name: Iname, year: Iyear});
        return {data: msg};
    }
}
