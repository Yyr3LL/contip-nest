import {IsString, IsEmail, IsArray} from 'class-validator';


export class CreateMovieDto {
    @IsString()
    title: string;

    @IsArray()
    genres: number[];
}
