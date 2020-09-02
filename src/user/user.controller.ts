import {Body, Controller, Get, Post, Param, Request, UseGuards} from '@nestjs/common';
import {UserService} from './user.service';
import {User} from './user.entity';
import {JwtAuthGuard} from '../auth/jwt-auth.guards';
import {AuthService} from 'src/auth/auth.service';
import {CreateUserDto} from './create-user.dto';


@Controller('auth')
export class UserController {

    constructor(
        private userService: UserService,
        private authService: AuthService
    ) {}

    @Post('signup')
    register(@Body() body: CreateUserDto): Promise<User> {
        return this.userService.create(body);
    }

    @Post('login')
    async logIn(@Body() body): Promise<object> {
        return await this.userService.authenticate(body);
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    getUserInfo(@Request() req) {
        return req.user;
    }

}
