import { Module } from '@nestjs/common';
import {DatabaseModule} from "../database/database.module";
import {genreProviders} from "./genre.providers";
import {GenreService} from "./genre.service";
import { GenreController } from './genre.controller';

@Module({
    imports: [DatabaseModule],
    providers: [
        ...genreProviders,
        GenreService
    ],
    exports: [
        GenreService
    ],
    controllers: [GenreController]
})
export class GenreModule {}
