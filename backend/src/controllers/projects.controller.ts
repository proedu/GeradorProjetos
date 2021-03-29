import { Controller, Post, Body, UseGuards, Catch, Request, Get, Param } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ProjectDTO } from 'src/http/dto/Project.dto';
import { UserDTO } from 'src/http/dto/User.dto';
import { AuthGuard } from 'src/services/auth/auth.guard'
import { ProjectService } from 'src/services/project/project.service';

@Controller('api/projects')
@Catch()
export class ProjectController {

    constructor(
        private jwtService: JwtService,
        private projectService : ProjectService
      ) {}

    @Post('/')
    @UseGuards(AuthGuard)
    public handle(@Body() projectDto: ProjectDTO, @Request() request){
        let userDto = this.jwtService.decode((request.headers.authorization.replace("Bearer ",""))) as any

        return this.projectService.createProject({
            username : userDto.username, 
            password : userDto.sub
        },
         projectDto)
    }

    @Get('/:id')
    @UseGuards(AuthGuard)
    public getProject(@Param() params){  
        return this.projectService.getProject(params.id)
    }

    @Get('/')
    @UseGuards(AuthGuard)
    public getAllProjects(@Request() request){
        let userDto = this.jwtService.decode((request.headers.authorization.replace("Bearer ",""))) as any

        return this.projectService.getAllProjectsByUser({
            username : userDto.username, 
            password : userDto.sub
        })
    }
}
