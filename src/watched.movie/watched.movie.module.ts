import {Module} from '@nestjs/common';
import {WatchedMovieController} from './watched.movie.controller';
import {WatchedMovieService} from './watched.movie.service';
import {AuthModule} from '../auth/auth.module';
import {MovieModule} from '../movie/movie.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import {WatchedMovie} from './watched.movie.entity';
import { UserModule } from 'src/user/user.module';

@Module({
    imports: [
        AuthModule,
        MovieModule,
        UserModule,
        TypeOrmModule.forFeature([WatchedMovie])
    ],
    providers: [
        WatchedMovieService,
    ],
    controllers: [WatchedMovieController]
})
export class WatchedMovieModule {}
