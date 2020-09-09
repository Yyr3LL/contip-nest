import * as request from 'supertest';
import {Test} from '@nestjs/testing';
import {UserModule} from '../src/user/user.module';
import {UserService} from '../src/user/user.service'
import {INestApplication} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import { User } from '../src/user/user.entity';
import { AppModule } from '../src/app.module';

describe('Cats', () => {
    let app: INestApplication;

    beforeAll(async () => {
        const moduleRef = await Test.createTestingModule({
            imports: [
                AppModule
                // UserModule,
                // TypeOrmModule.forRoot({
                //     type: 'postgres',
                //     host: 'localhost',
                //     port: 5432,
                //     username: 'yyr3ll',
                //     password: '7331',
                //     database: 'e2e_test',
                //     entities: ["src/**/*.entity.js"],
                //     synchronize: true,
                // }),
            ]
        }).compile();

        app = moduleRef.createNestApplication();
        console.log(moduleRef);
        await app.init();
    });

    it(`can register`, (done) => {
        console.log(app);
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