import {Module} from '@nestjs/common';
import {WatchedMovieController} from './watched.movie.controller';
import {WatchedMovieService} from './watched.movie.service';
import {watchedMovieProviders} from './watched.movie.providers';
import {AuthModule} from '../auth/auth.module';
import {MovieModule} from '../movie/movie.module';
import { DatabaseModule } from '../database/database.module';

@Module({
    imports: [
        DatabaseModule,
        AuthModule,
        MovieModule
    ],
    providers: [
        WatchedMovieService,
        ...watchedMovieProviders,
    ],
    controllers: [WatchedMovieController]
})
export class WatchedMovieModule {}
