import { Body, Controller, Get, Post, Put, Delete, UseGuards} from '@nestjs/common';
import { BooksService } from './books.service';
import CreateBookDto from './dto/create-book.dto';
import UpdateBookDto from './dto/update-book.dto';
import DeleteBookDto from './dto/delete-book.dto';
import { ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';


@Controller('books')
export class BooksController {
    constructor(private readonly booksService: BooksService) {}
    @Post('post')
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    postBook( @Body() book: CreateBookDto) {
        return this.booksService.insert(book);
    }
    @Get()
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    getAll() {
        return this.booksService.getAllBooks();
    }
    @Put()
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    updateBook( @Body() book: UpdateBookDto) {
        return this.booksService.update(book);
    }
    @Delete()
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    deleteBook( @Body() book: DeleteBookDto) {
        return this.booksService.delete(book);
    }
}
