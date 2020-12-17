import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, ManyToMany, JoinTable, OneToMany } from 'typeorm';
import GroupEntity from './group.entity';
import TagEntity from './tag.entity';


@Entity('task')
export default class TaskEntity extends BaseEntity
{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @ManyToOne(type => GroupEntity)
  group: GroupEntity;

  @ManyToOne(type => TaskEntity)
  parrent_task: TaskEntity;

  @OneToMany(type => TaskEntity, task => task.parrent_task)
  @JoinTable()
  sub_tasks: TaskEntity[];

  @ManyToMany(type => TagEntity)
  @JoinTable()
  tags: TagEntity[];
}
