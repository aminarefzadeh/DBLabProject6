import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity('Genre')
export default class GenreEntity extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

}