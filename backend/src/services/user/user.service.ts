import { Injectable, Inject } from '@nestjs/common';
import { UserDTO } from 'src/http/dto/User.dto';
import { Repository } from 'typeorm';
import { RegisterDTO } from 'src/http/dto/Register.dto';
import { User } from 'src/models/user.entity' 

@Injectable()
export class UserService {

    private readonly users: User[];

    constructor(
		@Inject('USER_REPOSITORY')
        private userRepository: Repository<User>,
    ) { }
        
	public registerUser (user : RegisterDTO) {
		let userEntity = this.userRepository.create() as User
		userEntity.username = user.username
		userEntity.email = user.email
		userEntity.password = user.password

		return this.userRepository.save(userEntity)
	}

    public findAuthenticatedUser(user : UserDTO): any {
        return this.userRepository.findOne( {
			where : {
				username : user.username,
				password : user.password
			}
		});
    }
}
