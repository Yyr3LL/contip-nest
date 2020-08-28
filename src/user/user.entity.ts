import { Entity, PrimaryGeneratedColumn, Column, Unique, BeforeInsert } from "typeorm/index";
import * as bcrypt from "bcrypt";

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

    @Column({unique: true})
    password: string;

    @BeforeInsert()
    hash_password(): void{
        const salt = bcrypt.genSaltSync();
        this.password = bcrypt.hashSync(this.password, salt);
    }

    @BeforeInsert()
    auto_staff(): void {
        if (this.isStaff === undefined)
            this.isStaff = false;
    }
}
