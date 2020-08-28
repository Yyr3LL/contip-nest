import {Injectable, Inject} from '@nestjs/common';
import {Repository} from 'typeorm';
import {User} from "./user.entity";
import * as bcrypt from "bcrypt";

@Injectable()
export class UserService {
    constructor(
        @Inject('USER_REPOSITORY')
        private userRepository: Repository<User>
    ) {}

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

    async authenticate(body): Promise<boolean> {
        const user: User = await this.userRepository.findOne({username: body.username});
        return bcrypt.compare(body.password, user.password);
    }
}
