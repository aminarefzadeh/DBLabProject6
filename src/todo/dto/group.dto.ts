export class CreateGroupDto {
    readonly name: string;
}

export class UpdateGroupDto {
    readonly id: number;
    readonly name: string;
}

export class DeleteGroupDto {
    readonly id: number;
}