import { Connection } from "typeorm";
import { User } from "src/models/user.entity";
import { Project } from "src/models/project.entity";


export const repositoriesProvider = [
    {
      provide: 'USER_REPOSITORY',
      useFactory: (connection: Connection) => connection.getRepository(User),
      inject: ['DATABASE_CONNECTION'],
    },
    {
      provide: 'PROJECT_REPOSITORY',
      useFactory: (connection: Connection) => connection.getRepository(Project),
      inject: ['DATABASE_CONNECTION'],
    }
  ];