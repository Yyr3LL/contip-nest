import {Injectable, Inject} from '@nestjs/common';
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
        return this.movieRepository.findOne(id);
    }

    async create(body): Promise<Movie> {
        let genres = [];
        for (let genre of body.genres) {
            genres.push(await this.genreService.findOne(genre))
        }
        const toivo = this.movieRepository.create({
            title: body.title,
            genres: genres
        })
        return this.movieRepository.save(toivo)
    }
}