import { Injectable, Inject } from '@nestjs/common';
import { WatchedMovie } from './watched.movie.entity';
import { Repository } from 'typeorm';

@Injectable()
export class WatchedMovieService {
    constructor(
        @Inject('WATCHEDMOVIE_REPOSITORY')
        private watchedMovieRepository: Repository<WatchedMovie>,
    ) {}

    async create(body): Promise<WatchedMovie> {
        return this.watchedMovieRepository.create({
            rating: body.rating || null,
            user: body.user,
            movie: body.movie

        })
    }

    async findAll(): Promise<WatchedMovie[]> {
        return this.watchedMovieRepository.find({relations: ['movie', 'user']})
    }

    // async findOne(id: number): Promise<WatchedMovie> {
    //     return this.watchedMovieRepository.find(movie.id = id);
    // }
    //
    // async update(body): Promise<WatchedMovie> {
    //     return 123;
    // }
}
