import {Injectable} from '@nestjs/common';
import {Repository} from 'typeorm';
import {Genre} from './genre.entity';
import {InjectRepository} from '@nestjs/typeorm';

@Injectable()
export class GenreService {
    constructor(
        @InjectRepository(Genre)
        private genreRepository: Repository<Genre>,
    ) {}

    async findAll(): Promise<Genre[]> {
        return this.genreRepository.find();
    }

    async findOne(id: number): Promise<Genre> {
        return this.genreRepository.findOne(id);
    }

    async findByIds(ids: number[]): Promise<Genre[]> {
        return this.genreRepository.findByIds(ids);
    }

    async create(body): Promise<Genre> {
        const toivo = this.genreRepository.create({
            name: body.name
        })
        return this.genreRepository.save(toivo)
    }
}