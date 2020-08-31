import {Connection} from "typeorm/index";
import {WatchedMovie} from './watched.movie.entity';

export const watchedMovieProviders = [
    {
        provide: 'WATCHEDMOVIE_REPOSITORY',
        useFactory: (connection: Connection) => connection.getRepository(WatchedMovie),
        inject: ['DB_CONNECTION'],
    },
];