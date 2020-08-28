import {Body, Controller, Get, Post, Param} from '@nestjs/common';
import {GenreService} from "../genre/genre.service";
import {Genre} from "../genre/genre.entity";
import {Movie} from "../movie/movie.entity";
import {MovieService} from "../movie/movie.service";
import { UserService } from 'src/user/user.service';
import { User } from 'src/user/user.entity';


@Controller('api')
export class ApiController {

    constructor(
        private genreService: GenreService,
        private movieService: MovieService,
        private userService: UserService
) {}

    @Get('genre')
    getGenreList(): Promise<Genre[]> {
        return this.genreService.findAll()
    }

    @Post('genre')
    createGenre(@Body() body): Promise<Genre> {
        return this.genreService.create(body)
    }


}
