import {Body, Controller, Get, Post, Param} from '@nestjs/common';
import { MovieService } from './movie.service';
import { Movie } from './movie.entity';


@Controller('movie')
export class MovieController {

    constructor(private movieService: MovieService) {}

    @Post('movie')
    createMovie(@Body() body): Promise<Movie> {
        return this.movieService.create(body)
    }

    @Get('movie')
    getMovieList(): Promise<Movie[]> {
        return this.movieService.findAll()
    }

    @Get('movie/:id')
    getMovie(@Param('id') id): Promise<Movie> {
        return this.movieService.findOne(id);
    }

}
