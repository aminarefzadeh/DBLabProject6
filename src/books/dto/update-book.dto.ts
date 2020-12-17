export default class UpdateBookDto {
    readonly id: number;
    readonly name: string;
    readonly userID: number;
    readonly genreIDs: number[];
}
