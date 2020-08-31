import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinTable, BeforeInsert} from "typeorm";
import {User} from "src/user/user.entity";
import { Movie } from "src/movie/movie.entity";

@Entity()
export class WatchedMovie {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: true})
    rating: number;

    @ManyToOne(type => User, user => user.watched_movies)
    user: User;

    @ManyToOne(type => Movie, movie => movie.watched_movies)
    movie: Movie;

    @BeforeInsert()
    auto_rated(): void {
        if (this.rating === undefined)
            this.rating = null;
    }

}