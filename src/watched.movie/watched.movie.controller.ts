import {Controller, Post, Body, UseGuards, Request, Put, Delete} from '@nestjs/common';
import {WatchedMovieService} from './watched.movie.service';
import {WatchedMovie} from './watched.movie.entity';
import {JwtAuthGuard} from 'src/auth/jwt-auth.guards';
import {CreateUpdateWatchedMovieDto} from './create-update-watched-movie.dto';

@Controller('watched_list')
export class WatchedMovieController {
    constructor(private watchedMovieService: WatchedMovieService) {}

    @UseGuards(JwtAuthGuard)
    @Post()
    add_to_watched(
        @Body() body: CreateUpdateWatchedMovieDto,
        @Request() req): Promise<WatchedMovie> {
        return this.watchedMovieService.create(body, req.user);
    }

    @UseGuards(JwtAuthGuard)
    @Put()
    update(
        @Body() body: CreateUpdateWatchedMovieDto,
        @Request() req): Promise<WatchedMovie> {
        return this.watchedMovieService.update(body, req.user);
    }

    @UseGuards(JwtAuthGuard)
    @Delete()
    delete(
        @Body() body: CreateUpdateWatchedMovieDto,
        @Request() req): Promise<WatchedMovie> {
        return this.watchedMovieService.remove(body, req.user);
    }


}
