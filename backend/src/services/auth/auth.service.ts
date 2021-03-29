import { Injectable, UnauthorizedException, NotFoundException, BadRequestException, HttpStatus } from '@nestjs/common';
import { UserService } from '../user/user.service'
import { JwtService } from '@nestjs/jwt';
import { UserDTO } from 'src/http/dto/User.dto';
import { RegisterDTO } from 'src/http/dto/Register.dto';

@Injectable()
export class AuthService {

    constructor(
      private usersService: UserService,
      private jwtService: JwtService
    ) {}

    public validate(token : string) {
      try {
        let user = this.jwtService.decode((token.replace("Bearer ", ""))) as UserDTO
        return this.usersService.findAuthenticatedUser(user) ? true : false
      } catch (error) {
        return false
      }

      return false
    }

    public async login(userdto : UserDTO) {
  
      let user = await this.usersService.findAuthenticatedUser(userdto)
		
      if (!user) {
        return new NotFoundException()
      }

      const payload = { username: userdto.username, sub: userdto.password };

      return {
        access_token: this.jwtService.sign(payload),
      };
    }

    public register(register : RegisterDTO) {
		let user = this.usersService.registerUser(register)

		if (!user) {
			return new BadRequestException()
		}

		return {
			"code" : HttpStatus.CREATED,
			"message" : "Usuario criado com sucesso"
		}
	}

  }
