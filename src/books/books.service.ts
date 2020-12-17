import BookEntity from '../db/book.entity';
import CreateBookDto from './dto/create-book.dto';
import UpdateBookDto from './dto/update-book.dto';
import DeleteBookDto from './dto/delete-book.dto';
import UserEntity from '../db/user.entity';
import { createQueryBuilder, getConnection } from 'typeorm';
import GenreEntity from '../db/genre.entity';

export class BooksService {

  async insert(bookDetails: CreateBookDto): Promise<BookEntity> {
    const { name , userID , genreIDs } = bookDetails;
    const book = new BookEntity();
    book.name = name;
    book.user = await UserEntity.findOne(userID) ;
    book.genres=[];
    for ( let i = 0; i < genreIDs.length ; i++)
    {
             const genre = await GenreEntity.findOne(genreIDs[i]);
             book.genres.push(genre);
    }
    await book.save();
    return book;
  }
  async getAllBooks(): Promise<BookEntity[] > {
    // const user: UserEntity = await UserEntity.findOne({where: {id: 2}, relations: ['books']});
    return BookEntity.find();
  }
  async delete(bookDetails: DeleteBookDto) {
    let genre_to_remove = await BookEntity.findOne(bookDetails.id);
    return await BookEntity.remove(genre_to_remove);
  }
  async update(bookDetails: UpdateBookDto) {
    const { id, name , userID , genreIDs } = bookDetails;
    let book = await BookEntity.findOne(id);
    book.name = name;
    book.user = await UserEntity.findOne(userID) ;
    book.genres=[];
    for ( let i = 0; i < genreIDs.length ; i++)
    {
      const genre = await GenreEntity.findOne(genreIDs[i]);
      book.genres.push(genre);
    }
    await book.save();
    return book;
  }
}