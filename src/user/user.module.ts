import { Module } from '@nestjs/common';
import {DatabaseModule} from "../database/database.module";
import { UserService } from './user.service';
import { userProviders } from './user.providers';
import { UserController } from './user.controller';

@Module({
    imports: [
        DatabaseModule
    ],
    providers: [
        ...userProviders,
        UserService
    ],
    exports: [
        UserService
    ],
    controllers: [UserController]

})
export class UserModule {}
