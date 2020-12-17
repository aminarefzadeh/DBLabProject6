import { Injectable } from '@nestjs/common';
import UserEntity from '../db/user.entity';
import CreateUserDto from './dto/create-user.dto';
import BookEntity from '../db/book.entity';

export type User = any;


@Injectable()
export class UserService {

  async insert(userDetails: CreateUserDto): Promise<UserEntity> {
    const userEntity: UserEntity = UserEntity.create();
    const {name, username, password} = userDetails;
    userEntity.name = name;
    userEntity.username = username;
    userEntity.password = password;
    await UserEntity.save(userEntity);
    return userEntity;
  }
  async getAllUsers(): Promise<UserEntity[]> {
    return await UserEntity.find();
  }
  async getBooksOfUser(userID: number): Promise<BookEntity[]> {
    console.log(typeof(userID));
    const user: UserEntity = await UserEntity.findOne({where: {id: userID}, relations: ['books']});
    return user.books;
  }
  async findOne(username: string): Promise<User | undefined> {
    let user = await UserEntity.findOne({username: username})
    return user;
  }
}