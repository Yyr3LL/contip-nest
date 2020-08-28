import {Injectable, Inject} from '@nestjs/common';
import {Repository} from 'typeorm';
import {Genre} from './genre.entity';

@Injectable()
export class GenreService {
    constructor(
        @Inject('GENRE_REPOSITORY')
        private genreRepository: Repository<Genre>,
    ) {}

    async findAll(): Promise<Genre[]> {
        return this.genreRepository.find();
    }

    async findOne(id: number): Promise<Genre> {
        return this.genreRepository.findOne(id);
    }

    async create(body): Promise<Genre> {
        const toivo = this.genreRepository.create({
            name: body.name
        })
        return this.genreRepository.save(toivo)
    }
}