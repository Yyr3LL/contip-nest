import {Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn} from "typeorm";
import {Genre} from "../genre/genre.entity";

@Entity()
export class Movie {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 200})
    title: string;

    @ManyToMany(type => Genre)
    @JoinTable()
    genres: Genre[];

}