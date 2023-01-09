import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { XxxModule } from './xxx/xxx.module';

const MYSQL_CONF: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  username: 'root',
  password: '111111',
  database: 'nestdemo',
  port: 3306,
  autoLoadEntities: true,
  synchronize: true,
};

@Module({
  imports: [XxxModule, TypeOrmModule.forRoot(MYSQL_CONF)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
