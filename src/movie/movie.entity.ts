import {Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn, OneToMany} from "typeorm";
import {Genre} from "../genre/genre.entity";
import { WatchedMovie } from "../watched.movie/watched.movie.entity";

@Entity()
export class Movie {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 200})
    title: string;

    @ManyToMany(type => Genre)
    @JoinTable()
    genres: Genre[];

    @OneToMany(type => WatchedMovie, watched_movie => watched_movie.movie)
    watched_movies: WatchedMovie[];

}