import {Injectable, Inject, HttpStatus, HttpException} from '@nestjs/common';
import {Repository} from 'typeorm';
import {User} from "./user.entity";
import * as bcrypt from "bcrypt";
import {AuthService} from '../auth/auth.service';
import {InjectRepository} from '@nestjs/typeorm';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
        private authService: AuthService
    ) {}

    async findById(id: number): Promise<User> {
        const toivo = await this.userRepository.findOne(
            id,
            {relations: ['watched_movies']});
        if (toivo === undefined)
            throw new HttpException('User not found', HttpStatus.NOT_FOUND);
        return toivo;

    }

    async findOne(criteria): Promise<User> {
        const toivo = await this.userRepository.findOne(criteria);
        if (toivo === undefined)
            throw new HttpException('User not found', HttpStatus.NOT_FOUND);
        return toivo;

    }

    async findAll(): Promise<User[]> {
        return this.userRepository.find({
            relations: ['watched_movies']
        });
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
        if (!await bcrypt.compare(body.password, user.password))
            throw new HttpException('Password does not match', HttpStatus.FORBIDDEN)
    }

    async authenticate(body): Promise<any> {
        const user = await this.findOne({username: body.username});
        await this.checkPassword(body, user);
        return await this.authService.login(user);
    }

}
