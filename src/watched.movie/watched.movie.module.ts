import {Module} from '@nestjs/common';
import {WatchedMovieController} from './watched.movie.controller';
import {WatchedMovieService} from './watched.movie.service';
import { watchedMovieProviders } from './watched.movie.providers';
import { DatabaseModule } from 'src/database/database.module';
import { AuthModule } from 'src/auth/auth.module';
import { MovieModule } from 'src/movie/movie.module';

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
