import * as request from 'supertest';
import {Test} from '@nestjs/testing';
import {UserModule} from '../src/user/user.module';
import {UserService} from '../src/user/user.service'
import {INestApplication} from '@nestjs/common';
import { createConnection } from 'typeorm';

describe('Cats', () => {
    let app: INestApplication;
    // let userService = {create: () => {
    //     return {
    //         username: 'some_username',
    //         email: 'something@gmail.com',
    //         password: ''
    //     }
    //     }};

    beforeAll(async () => {
        const moduleRef = await Test.createTestingModule({
            imports: [UserModule],
        })
            // .overrideProvider(UserService)
            // .useValue(userService)
            .compile();

        const databaseProviders = [
            {
                provide: 'DB_CONNECTION',
                useFactory: async () => await createConnection({
                    type: 'postgres',
                    host: 'localhost',
                    port: 5432,
                    username: 'yyr3ll',
                    password: '7331',
                    database: 'e2e_test',
                    entities: [
                        __dirname + '/../**/*.entity{.ts,.js}',
                    ],
                    synchronize: true,
                }),
            }
        ]

        app = moduleRef.createNestApplication();
        await app.init();
    });

    it(`can register`, (done) => {
        return request(app.getHttpServer())
            .post('/auth/signup')
            .send({
                username: 'some_username3',
                email: 'something4@gmail.com',
                password: 'asdasdasd',
                re_password: 'asdasdasd'
            })
            .expect(201)
            .then((res) => {
                expect(res.body).toHaveProperty('username');
                expect(res.body).toHaveProperty('email');
                console.log(res.body);
                done();
            });
    });

    afterAll(async () => {
        await app.close();
    });
});