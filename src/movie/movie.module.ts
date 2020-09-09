import {Module} from '@nestjs/common';
import {MovieService} from "./movie.service";
import {GenreModule} from "../genre/genre.module";
import {MovieController} from './movie.controller';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Movie} from './movie.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([Movie]),
        GenreModule
    ],
    providers: [
        MovieService
    ],
    exports: [
        MovieService
    ],
    controllers: [MovieController]
})
export class MovieModule {}
