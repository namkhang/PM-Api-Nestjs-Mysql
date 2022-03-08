import { TypeOrmModuleOptions } from "@nestjs/typeorm";

const ORMConfig  : TypeOrmModuleOptions  =  {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'password',
  database: 'hitachi_vantara_report',
  entities: ["dist/**/entities/*.entity{.js,.ts}"],
  migrations: [
    "dist/src/migrations/*{.js,.ts}"
  ],
cli: {
  "migrationsDir": "src/migrations"
},
  synchronize: true
}

export default ORMConfig 
