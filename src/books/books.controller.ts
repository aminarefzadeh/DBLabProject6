import { Body, Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { BooksService } from './books.service';
import CreateBookDto from './dto/create-book.dto';
import UpdateBookDto from './dto/update-book.dto';
import DeleteBookDto from './dto/delete-book.dto';

@Controller('books')
export class BooksController {
    constructor(private readonly booksService: BooksService) {}
    @Post('post')
    postBook( @Body() book: CreateBookDto) {
        return this.booksService.insert(book);
    }
    @Get()
    getAll() {
        return this.booksService.getAllBooks();
    }
    @Put()
    updateBook( @Body() book: UpdateBookDto) {
        return this.booksService.update(book);
    }
    @Delete()
    deleteBook( @Body() book: DeleteBookDto) {
        return this.booksService.delete(book);
    }
}
