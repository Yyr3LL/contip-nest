import { createConnection} from "typeorm";

export const databaseProviders = [
    {
        provide: 'DB_CONNECTION',
        useFactory: async () => await createConnection({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'yyr3ll',
            password: '7331',
            database: 'db',
            entities: [
                __dirname + '/../**/*.entity{.ts,.js}',
            ],
            synchronize: true,
        }),
    },
]