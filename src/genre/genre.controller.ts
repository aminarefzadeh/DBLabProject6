import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { GenreService } from './genre.service';
import CreateGenreDto from './dto/create-genre.dto';
import { ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard'


@Controller('genre')
export class GenreController {
    constructor(private readonly genreService: GenreService) {}
    @Post('post')
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    postGenre( @Body() genre: CreateGenreDto) {
        return this.genreService.insert(genre);
    }
    @Get()
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    getAll() {
        return this.genreService.getAllGenre();
    }
}