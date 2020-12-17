import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, ManyToMany, JoinTable, OneToMany } from 'typeorm';
import TaskEntity from './task.entity'

@Entity('group')
export default class GroupEntity extends BaseEntity
{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @OneToMany(type => TaskEntity, task => task.group)
  @JoinTable()
  sub_tasks: TaskEntity[];

}
