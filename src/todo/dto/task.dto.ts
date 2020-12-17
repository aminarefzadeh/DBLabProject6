import { IsOptional } from 'class-validator'

export class CreateTaskDto {

    @IsOptional()
    readonly parentID: number;
    
    @IsOptional()
    readonly description: string;

    readonly tagNames: string[];

    readonly subTasks: CreateTaskDto[];

    readonly groupID: number;
}


export class UpdateTaskDto {

    readonly id: number;

    @IsOptional()
    readonly parentID: number;
    
    @IsOptional()
    readonly description: string;

    readonly tagNames: string[];

    readonly subTasks: CreateTaskDto[];

    readonly groupID: number;
}

export class DeleteTaskDto {
    readonly id: number;
}