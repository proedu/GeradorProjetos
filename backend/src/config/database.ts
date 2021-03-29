require('dotenv').config()

export const databaseConfig = 
  {
      type: 'mysql',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [__dirname + "/../**/*.entity{.ts,.js}"],
      seeds : ["src/database/seeds/*.seed.ts"],
      synchronize: true,
      dropSchema : false
}