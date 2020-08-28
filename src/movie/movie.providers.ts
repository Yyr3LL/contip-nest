import {Connection} from "typeorm/index";
import {Movie} from "./movie.entity";

export const movieProviders = [
    {
        provide: 'MOVIE_REPOSITORY',
        useFactory: (connection: Connection) => connection.getRepository(Movie),
        inject: ['DB_CONNECTION'],
    },
];