import {Connection} from "typeorm/index";
import {User} from "./user.entity";

export const userProviders = [
    {
        provide: 'USER_REPOSITORY',
        useFactory: (connection: Connection) => connection.getRepository(User),
        inject: ['DB_CONNECTION'],
    },
];