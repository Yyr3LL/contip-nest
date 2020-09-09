import {Injectable, Inject, HttpException, HttpStatus} from '@nestjs/common';
import {WatchedMovie} from './watched.movie.entity';
import {Repository} from 'typeorm';
import {MovieService} from '../movie/movie.service';
import {InjectRepository} from '@nestjs/typeorm';
import { UserService } from 'src/user/user.service';

@Injectable()
export class WatchedMovieService {
    constructor(
        @InjectRepository(WatchedMovie)
        private watchedMovieRepository: Repository<WatchedMovie>,
        private movieService: MovieService,
        private userService: UserService
    ) {}

    async findOne(criteria): Promise<WatchedMovie> {
        const toivo = await this.watchedMovieRepository.findOne(criteria);
        if (toivo === undefined)
            throw new HttpException('Watched movie not found', HttpStatus.NOT_FOUND);
        return toivo;
    }

    async findAll(user): Promise<any> {
        const curr_user = await this.userService.findById(user.userId);
        return                  this.watchedMovieRepository.find({
            where: {
                user: curr_user
            },
            relations: ['user', 'movie']});
    }

    async create(body, user): Promise<WatchedMovie> {
        const curr_user = await this.userService.findOne(user.userId);
        const movie =     await this.movieService.findOne(body.movie_id)
        const toivo =           this.watchedMovieRepository.create({
            rating: body.rating || null,
            user: curr_user,
            movie: movie
        });
        return this.watchedMovieRepository.save(toivo);
    }

    async update(body, user): Promise<WatchedMovie> {
        const movie =         await this.movieService.findOne(body.movie_id);
        const watched_movie = await this.findOne({movie: movie});
        return                await this.watchedMovieRepository.save({
            id: watched_movie.id,
            user: user.userId,
            rating: body.rating
        });
    }

    async remove(body, user): Promise<any> {
        return this.watchedMovieRepository.delete({movie: body.movie_id, user: user.userId})
    }

}
