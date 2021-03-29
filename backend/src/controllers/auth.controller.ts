import { Controller, Body, Post } from '@nestjs/common';
import { userInfo } from 'os';
import { AuthService } from 'src/services/auth/auth.service';
import { UserDTO } from 'src/http/dto/User.dto';
import { RegisterDTO } from 'src/http/dto/Register.dto';

@Controller('auth')
export class AuthController {

    constructor (
        private auth : AuthService
    ) {}

    @Post('/login')
    public async login(@Body() user : UserDTO) {
        return this.auth.login(user);
	}
	

    @Post('/register')
    public async register(@Body() user : RegisterDTO) {
        return this.auth.register(user);
    }
}
