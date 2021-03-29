import { Injectable, Inject } from '@nestjs/common';
import { UserDTO } from 'src/http/dto/User.dto';
import { Repository } from 'typeorm';
import { User } from 'src/models/user.entity' 
import { Project } from 'src/models/project.entity'
import { ProjectDTO } from 'src/http/dto/Project.dto';
import { UserService } from '../user/user.service';

@Injectable()
export class ProjectService {

    constructor(
		@Inject('PROJECT_REPOSITORY')
		private projectRepository: Repository<Project>,
		private userService : UserService
    ) { }
        
	public async createProject (userDto : UserDTO, projectDto : ProjectDTO) {
		
		let user = (await this.userService.findAuthenticatedUser({
			username : userDto.username,
			password : userDto.password
		}))
		
		let project = this.projectRepository.create() as Project 
		project.user = user
		project.name = projectDto.name
		project.educationalProject = projectDto.educationalProject
		project.data = projectDto.payload
		
		return this.projectRepository.save(project)
	}

	public async getProject (id : string) {
		return await this.projectRepository.findOne( {
			where : {
				id : id
			}}
			)
	}

	public async getAllProjectsByUser (userDto : UserDTO) {
		let user = (await this.userService.findAuthenticatedUser({
			username : userDto.username,
			password : userDto.password
		}))
		
		return await this.projectRepository.find( {
			select : ["id", "name",  "create_at", 'educationalProject'],
			where : {
				user : user
			}})
	}
}
