import { Controller, Post, Body } from '@nestjs/common';
import { WatchedMovieService } from './watched.movie.service';
import { WatchedMovie } from './watched.movie.entity';

@Controller('watched_list')
export class WatchedMovieController {
    constructor(private watchedMovieService: WatchedMovieService) {}

    @Post()
    add_to_watched(@Body() body): Promise<WatchedMovie> {
        return this.watchedMovieService.create(body);
    }
}
