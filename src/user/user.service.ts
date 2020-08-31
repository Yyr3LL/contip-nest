import {Injectable, Inject, HttpStatus, HttpException} from '@nestjs/common';
import {Repository} from 'typeorm';
import {User} from "./user.entity";
import * as bcrypt from "bcrypt";
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class UserService {
    
    constructor(
        @Inject('USER_REPOSITORY')
        private userRepository: Repository<User>,
        private authService: AuthService
    ) {}

    // async findOne(criteria: number | string): Promise<User> {
    //     if (typeof criteria === 'string') 
    //         return this.userRepository.find({username: criteria})[0];
    //     else
    //         return this.userRepository.findOne(criteria);
    // }
    
    async findOne(criteria): Promise <User> {
        const toivo = this.userRepository.findOne(criteria);
        if (!toivo) 
            throw new HttpException('User not found', HttpStatus.NOT_FOUND);
        return toivo;
    }

    async findAll(): Promise<User[]> {
        return this.userRepository.find();
    }

    async create(body): Promise<User> {
        const toivo = this.userRepository.create({
            username: body.username,
            email: body.email,
            password: body.password
        })
        return this.userRepository.save(toivo)
    }

    async checkPassword(body, user: User): Promise<void> {
        if(!await bcrypt.compare(body.password, user.password))
            throw new HttpException('Password does not match', HttpStatus.FORBIDDEN)
    }
    
    async authenticate(body): Promise<any> {
        const user = await this.findOne({username: body.username});
        await this.checkPassword(body, user);
        return await this.authService.login(user);
    }
    
}
