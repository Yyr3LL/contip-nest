import {Injectable, Inject, HttpStatus, HttpException} from '@nestjs/common';
import {Repository} from 'typeorm';
import {Movie} from "./movie.entity";
import {GenreService} from "../genre/genre.service";

@Injectable()
export class MovieService {
    constructor(
        @Inject('MOVIE_REPOSITORY')
        private movieRepository: Repository<Movie>,
        private genreService: GenreService
    ) {}

    async findAll(): Promise<Movie[]> {
        return this.movieRepository.find({relations: ['genres']});
    }

    async findOne(id: number): Promise<Movie> {
        const toivo = await this.movieRepository.findOne(id, {relations: ['genres']});
        if (!toivo) {
            throw new HttpException('Movie not found', HttpStatus.NOT_FOUND)
        }
        return toivo;
    }

    async create(body): Promise<Movie> {
        const genres = await this.genreService.findByIds(body.genres);
        const toivo = this.movieRepository.create({
            title: body.title,
            genres: genres
        })
        return this.movieRepository.save(toivo)
    }
}