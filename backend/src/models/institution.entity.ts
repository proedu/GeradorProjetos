import { Entity, 
    PrimaryGeneratedColumn, 
    Column, 
    CreateDateColumn, 
    OneToOne,
    JoinColumn,
    PrimaryColumn,
    OneToMany
} from "typeorm";
import { User } from "./user.entity";


@Entity()
export class Institution {
    @PrimaryGeneratedColumn('uuid')
    protected id : String

    @Column({
        type : "varchar",
        length : 200
    })
    protected name : String

    @Column({
        type : "varchar",
        length : 8
    })
    protected abbreviation : String

    @Column({
        type : "varchar",
        length : 14
    })
    protected cnpj : String

    @Column({
        type : "varchar",
        length : 7
    })
    protected emec : String

    @OneToMany(type => User, user => user.institution)
    public users: User[];


    @CreateDateColumn()
    protected create_at : Date

    @CreateDateColumn()
    protected updated_at : Date
}