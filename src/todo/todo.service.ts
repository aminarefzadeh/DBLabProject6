import { Injectable } from '@nestjs/common';
import TagDto from './dto/tag.dto';
import { CreateGroupDto, UpdateGroupDto, DeleteGroupDto } from './dto/group.dto';
import { CreateTaskDto, UpdateTaskDto, DeleteTaskDto} from './dto/task.dto';
import TagEntity from 'src/db/tag.entity';
import GroupEntity from 'src/db/group.entity';
import TaskEntity from 'src/db/task.entity';


@Injectable()
export class TodoService {

    async insertTag(tagDetails: TagDto): Promise<TagEntity> {
        const tagEntity: TagEntity = TagEntity.create();
        const {tag} = tagDetails;
        tagEntity.tag = tag;
        await TagEntity.save(tagEntity);
        return tagEntity;
    }

    async getAllTags(): Promise<TagEntity[]> {
        return await TagEntity.find();
    }

    async deleteTag(tagDetails: TagDto) {
        let tag_to_remove = await TagEntity.findOne({tag: tagDetails.tag});
        return await TagEntity.remove(tag_to_remove);
    }

    // updateTag is meaning less because tags are unique strings


    async insertGroup(groupDetails: CreateGroupDto): Promise<GroupEntity> {
        const groupEntity: GroupEntity = GroupEntity.create();
        const { name } = groupDetails;
        groupEntity.name = name;
        await GroupEntity.save(groupEntity);
        return groupEntity;
    }

    async getAllGroups(): Promise<GroupEntity[]> {
        return await GroupEntity.find();
    }

    async updateGroup(groupDetails: UpdateGroupDto) {
        let groupEntity = await GroupEntity.findOne(groupDetails.id);
        groupEntity.name = groupDetails.name;
        return await GroupEntity.save(groupEntity)
    }

    async deleteGroup(groupDetails: DeleteGroupDto) {
        let group_to_remove = await GroupEntity.findOne(groupDetails.id);
        return await GroupEntity.remove(group_to_remove);
    }


    async insertTask(taskDetails: CreateTaskDto): Promise<TaskEntity> {
        const taskEntity: TaskEntity = TaskEntity.create();
        const { description, parentID, subTasks, tagNames, groupID} = taskDetails;
        taskEntity.description = description;
        taskEntity.group = await GroupEntity.findOne(groupID);
        taskEntity.tags = []
        if (tagNames != undefined) {
            for ( let i = 0; i < tagNames.length; i++) {
                const tag = await TagEntity.findOne({tag: tagNames[i]});
                taskEntity.tags.push(tag);
            }
        }
        
        taskEntity.parrent_task = await TaskEntity.findOne(parentID);
        
        taskEntity.sub_tasks = []
        if (subTasks != undefined){
            for ( let i = 0; i < subTasks.length; i++) {
                const task = await this.insertTask(subTasks[i]);
                taskEntity.sub_tasks.push(task);
            }
        }
        
        await taskEntity.save();
        return taskEntity;
        
    }

    async getAllTask(): Promise<TaskEntity[]> {
        return await TaskEntity.find();
    }

    async updateTask(taskDetails: UpdateTaskDto) {
        let taskEntity = await TaskEntity.findOne(taskDetails.id);
        const { description, parentID, subTasks, tagNames, groupID} = taskDetails;
        taskEntity.description = description;
        taskEntity.group = await GroupEntity.findOne(groupID);
        if (tagNames != undefined){
            taskEntity.tags = []
            for ( let i = 0; i < tagNames.length; i++) {
                const tag = await TagEntity.findOne({tag: tagNames[i]});
                taskEntity.tags.push(tag);
            }
        }
        
        
        taskEntity.parrent_task = await TaskEntity.findOne(parentID);
        
        if (subTasks != undefined){
            taskEntity.sub_tasks = []
            for ( let i = 0; i < subTasks.length; i++) {
                const task = await this.insertTask(subTasks[i]);
                taskEntity.sub_tasks.push(task);
            }
        }
        
        await taskEntity.save();
        return taskEntity;
    }

    async deleteTask(taskDetails: DeleteTaskDto) {
        let task_to_remove = await TaskEntity.findOne(taskDetails.id);
        return await TaskEntity.remove(task_to_remove);
    }
}
 