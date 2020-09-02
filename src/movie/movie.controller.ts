import {Body, Controller, Get, Post, Param} from '@nestjs/common';
import { MovieService } from './movie.service';
import { Movie } from './movie.entity';
import { CreateMovieDto } from './create-movie.dto';


@Controller('movie')
export class MovieController {

    constructor(private movieService: MovieService) {}

    @Post()
    createMovie(@Body() body: CreateMovieDto): Promise<Movie> {
        return this.movieService.create(body)
    }

    @Get()
    getMovieList(): Promise<Movie[]> {
        return this.movieService.findAll()
    }

    @Get(':id')
    getMovie(@Param() params): Promise<Movie> {
        return this.movieService.findOne(params.id);
    }

}
