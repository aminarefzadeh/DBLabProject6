import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from 'typeorm';
import BookEntity from './book.entity';


@Entity('User')
export default class UserEntity extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @OneToMany( type => BookEntity , book => book.user)
  books: BookEntity[];

  @Column({ 
      type: 'varchar', 
      nullable: false, 
      unique: true 
  }) 
  username: string;

  @Column({ 
      type: 'varchar', 
      nullable: false 
  })
  password: string;

}