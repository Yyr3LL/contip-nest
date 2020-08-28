import {Module} from '@nestjs/common';
import {DatabaseModule} from "../database/database.module";
import {MovieService} from "./movie.service";
import {movieProviders} from "./movie.providers";
import {GenreModule} from "../genre/genre.module";
import { MovieController } from './movie.controller';

@Module({
    imports: [
        DatabaseModule,
        GenreModule
    ],
    providers: [
        ...movieProviders,
        MovieService
    ],
    exports: [
        MovieService
    ],
    controllers: [MovieController]
})
export class MovieModule {}
