import {Module} from '@nestjs/common';
import {WatchedMovieController} from './watched.movie.controller';
import {WatchedMovieService} from './watched.movie.service';
import { watchedMovieProviders } from './watched.movie.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
    imports: [DatabaseModule],
    controllers: [WatchedMovieController],
    providers: [
        WatchedMovieService,
        ...watchedMovieProviders,
    ]
})
export class WatchedMovieModule {
}
