import { Controller , Post, Get, Put, Delete, UseGuards, Body} from '@nestjs/common';
import TagDto from './dto/tag.dto';
import { CreateGroupDto, UpdateGroupDto, DeleteGroupDto } from './dto/group.dto';
import { CreateTaskDto, UpdateTaskDto, DeleteTaskDto} from './dto/task.dto';
import { ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { TodoService } from  './todo.service';

@Controller('todo')
export class TodoController {
    constructor(private readonly todoService: TodoService) {}
    
    // --------------- TAGS -------------------
    @Post('tag')
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    addTag( @Body() tag: TagDto) {
        return this.todoService.insertTag(tag);
    }

    @Get('tag')
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    getAllTags() {
        return this.todoService.getAllTags();
    }

    @Delete('tag')
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    deleteTag( @Body() tag: TagDto) {
        return this.todoService.deleteTag(tag);
    }

    // ------------- GROUP ------------------
    @Post('group')
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    addGroup( @Body() group: CreateGroupDto) {
        return this.todoService.insertGroup(group);
    }

    @Get('group')
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    getAllGroup() {
        return this.todoService.getAllGroups();
    }

    @Put('group')
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    updateGroup( @Body() group: UpdateGroupDto) {
        return this.todoService.updateGroup(group);
    }

    @Delete('group')
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    deleteGroup( @Body() group: DeleteGroupDto) {
        return this.todoService.deleteGroup(group);
    }

    // ------------- Task ------------------
    @Post('task')
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    addTask( @Body() task: CreateTaskDto) {
        return this.todoService.insertTask(task);
    }

    @Get('task')
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    getAllTask() {
        return this.todoService.getAllTask();
    }

    @Put('task')
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    updateTask( @Body() task: UpdateTaskDto) {
        return this.todoService.updateTask(task);
    }

    @Delete('task')
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    deleteTask( @Body() task: DeleteTaskDto) {
        return this.todoService.deleteTask(task);
    }

}
