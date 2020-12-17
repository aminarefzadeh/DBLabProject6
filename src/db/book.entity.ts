import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import UserEntity from './user.entity';
import GenreEntity from './genre.entity';

@Entity('Book')
export default class BookEntity extends BaseEntity
{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @ManyToOne(type => UserEntity)
  user: UserEntity;

  @ManyToMany(type => GenreEntity)
  @JoinTable()
  genres: GenreEntity[];
}
