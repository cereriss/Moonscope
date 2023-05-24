import { IssString } from "class-validator";

export class CreateDiaryDto{
    @IssString()
    readonly content: string;
}