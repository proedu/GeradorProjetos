import { Module } from '@nestjs/common';
import { databaseProviders } from './providers/database.provider';
import { ProjectController } from './controllers/projects.controller';
import { UserService } from './services/user/user.service';
import { AuthService } from './services/auth/auth.service';
import { AuthController } from './controllers/auth.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './auth/constants';
import { repositoriesProvider } from './providers/repositories.provider';
import { ProjectService } from './services/project/project.service';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [
    ProjectController, 
    AuthController
  ],
  providers: [
	...databaseProviders,
	...repositoriesProvider,
    UserService,
    AuthService,
    ProjectService
  ],
})
export class AppModule {}
