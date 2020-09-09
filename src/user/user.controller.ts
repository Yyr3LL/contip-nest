import {Body, Controller, Get, Post, Param, Request, UseGuards, UseInterceptors, ClassSerializerInterceptor} from '@nestjs/common';
import {UserService} from './user.service';
import {User} from './user.entity';
import {JwtAuthGuard} from '../auth/jwt-auth.guards';
import {AuthService} from '../auth/auth.service';
import {CreateUserDto} from './create-user.dto';
import { LoginDto } from './login.dto';


@UseInterceptors(ClassSerializerInterceptor)
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
    async logIn(@Body() body: LoginDto): Promise<object> {
        return await this.userService.authenticate(body);
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    getAllUsers(@Body() body) {
        return this.userService.findOne(body.id);
    }

}
