import {IsInt, Max, Min, IsOptional, IsPositive} from 'class-validator';


export class CreateUpdateWatchedMovieDto {
    @IsOptional()
    @Max(100)
    @Min(0)
    @IsInt()
    rating: number;

    @IsInt()
    @IsPositive()
    movie_id: number;
}
