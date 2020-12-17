import { Body, Controller, Get, ParseIntPipe, Post, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import CreateUserDto from './dto/create-user.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('users')
export class UserController {
    constructor(private readonly usersService: UserService) {}

//'postUser()' will handle the creating of new User
    @Post('post')
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    postUser( @Body() user: CreateUserDto) {
        return this.usersService.insert(user);
    }
// 'getAll()' returns the list of all the existing users in the database
    @Get()
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    getAll() {
        return this.usersService.getAllUsers();
    }

//'getBooks()' return all the books which are associated with the user 
// provided through 'userID' by the request  
    @Get('books')
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    getBooks( @Body('userID', ParseIntPipe) userID: number ) {
        return this.usersService.getBooksOfUser(userID);
    }
}
