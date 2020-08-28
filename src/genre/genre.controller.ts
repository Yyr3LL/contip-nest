import {Body, Controller, Get, Post, Param} from '@nestjs/common';
import { GenreService } from './genre.service';
import { Genre } from './genre.entity';


@Controller('genre')
export class GenreController {

    constructor(private genreService: GenreService) {}

    @Get('genre')
    getGenreList(): Promise<Genre[]> {
        return this.genreService.findAll()
    }

    @Post('genre')
    createGenre(@Body() body): Promise<Genre> {
        return this.genreService.create(body)
    }

}
