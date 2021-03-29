import { Entity, 
    PrimaryGeneratedColumn, 
    Column, 
    CreateDateColumn, 
    OneToMany,
    UpdateDateColumn,
    ManyToOne
} from "typeorm";
import { Project } from "./project.entity";
import { Institution } from "./institution.entity";


@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    protected id : String;

    @Column({
        type : "varchar",
        length : 30,
        nullable : false
    })
    public username : String

    @Column({
        type : "varchar",
        length : 200,
        nullable : false
    })
    public email : String

    @Column({
        type : "varchar",
        length : 200,
        nullable : false
    })
    public password : String

    @OneToMany(type => Project, project => project.user)
    public projects: Project[];

    @ManyToOne(type => Institution, institution => institution.users)
    public institution: Institution;

    @CreateDateColumn()
    protected create_at : Date

    @UpdateDateColumn()
    protected updated_at : Date

}