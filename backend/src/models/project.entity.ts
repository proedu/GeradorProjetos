import { Entity, 
    PrimaryGeneratedColumn, 
    Column, 
    CreateDateColumn, 
    OneToOne,
    JoinColumn,
    PrimaryColumn,
    ManyToOne,
    UpdateDateColumn
} from "typeorm";
import { User } from "./user.entity";


@Entity()
export class Project {
    @PrimaryGeneratedColumn('uuid')
    public id : String;

    @Column({
        type : "varchar"
    })
    public name : String

    @Column({
        type : "text"
    })
    public educationalProject : String

    @ManyToOne(type => User, user => user.projects)
    public user: User;
    
    @Column({
        type : "json"
    })
    public data : JSON

    @CreateDateColumn()
    public create_at : Date

    @UpdateDateColumn()
    protected updated_at : Date

}