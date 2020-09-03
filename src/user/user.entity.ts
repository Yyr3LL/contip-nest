import {Entity, PrimaryGeneratedColumn, Column, Unique, BeforeInsert, OneToMany} from "typeorm/index";
import * as bcrypt from "bcrypt";
import {WatchedMovie} from "../watched.movie/watched.movie.entity";
import { Exclude } from "class-transformer";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true})
    username: string;

    @Column({unique: true})
    email: string;

    @Column()
    isStaff: boolean;

    @Exclude()
    @Column({unique: true})
    password: string;

    @OneToMany(type => WatchedMovie, watched_movie => watched_movie.user)
    watched_movies: WatchedMovie[];


    @BeforeInsert()
    hash_password(): void {
        const salt = bcrypt.genSaltSync();
        this.password = bcrypt.hashSync(this.password, salt);
    }

    @BeforeInsert()
    auto_staff(): void {
        if (this.isStaff === undefined)
            this.isStaff = false;
    }
}
