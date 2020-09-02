import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { WatchedMovie } from './watched.movie.entity';
import { Repository } from 'typeorm';
import { MovieService } from 'src/movie/movie.service';

@Injectable()
export class WatchedMovieService {
    constructor(
        @Inject('WATCHEDMOVIE_REPOSITORY')
        private watchedMovieRepository: Repository<WatchedMovie>,
        private movieService: MovieService
    ) {}

    async findOne(criteria): Promise <WatchedMovie> {
        const toivo = this.watchedMovieRepository.findOne(criteria);
        if (!toivo)
            throw new HttpException('Watched movie not found', HttpStatus.NOT_FOUND);
        return toivo;
    }

    async findAll(): Promise<WatchedMovie[]> {
        return this.watchedMovieRepository.find({relations: ['movie', 'user']})
    }

    async create(body, user): Promise<WatchedMovie> {
        const movie = await this.movieService.findOne(body.id)
        if (!movie) {
            throw new HttpException('Movie not found', HttpStatus.NOT_FOUND);
        }
        return this.watchedMovieRepository.create({
            rating: body.rating || null,
            user: user.id,
            movie: body.movie

        })
    }

    async update(body, user): Promise<WatchedMovie> {
        const watched_movie = await this.findOne({movie: body.movie});
        return await this.watchedMovieRepository.save({
            id: watched_movie.id,
            user: user.id,
            rating: body.rating});
    }

    async remove(body, user): Promise<any> {
        return this.watchedMovieRepository.delete({movie: body.movie, user: user.id})
    }

}
