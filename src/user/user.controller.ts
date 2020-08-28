import {Body, Controller, Get, Post, Param} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';


@Controller('auth')
export class UserController {

    constructor(private userService: UserService) {}

    @Post('signup')
    register(@Body() body): Promise<User> {
        return this.userService.create(body);
    }

    @Post('login')
    logIn(@Body() body): Promise<boolean> {
        return this.userService.authenticate(body);
    }

}
