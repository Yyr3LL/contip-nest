import {Module} from '@nestjs/common';
import {DatabaseModule} from "../database/database.module";
import {UserService} from './user.service';
import {userProviders} from './user.providers';
import {UserController} from './user.controller';
import {AuthModule} from '../auth/auth.module';

@Module({
    imports: [
        DatabaseModule,
        AuthModule
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
