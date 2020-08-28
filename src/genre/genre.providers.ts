import {Genre} from './genre.entity';
import {Connection} from "typeorm/index";

export const genreProviders = [
    {
        provide: 'GENRE_REPOSITORY',
        useFactory: (connection: Connection) => connection.getRepository(Genre),
        inject: ['DB_CONNECTION'],
    },
];