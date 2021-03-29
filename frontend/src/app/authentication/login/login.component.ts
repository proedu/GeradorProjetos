import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../shared/auth.service';
import { Router } from '@angular/router';
import { RestapiService } from 'src/app/services/restapi.service';
import { nonWhiteSpace } from 'html2canvas/dist/types/css/syntax/parser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', [Validators.required]]
  });

  hide = true;
  user = true;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticationService,
    private router: Router,
	  private restService : RestapiService
  ) { }

  ngOnInit() {
    let token = window.localStorage.getItem('token');

    if (token) {
      token = JSON.parse(token)
      
      if (token['expire'] > Date.now()) {
        this.router.navigate(['/my-projects']);
      }
    } 
  }

  async onSubmit() {
    try {
		let result = await this.restService.postApi("auth/login", this.loginForm.value).subscribe(async res => {
			if (res["access_token"]) {
				let data = {
					token : res["access_token"],
					expire : Date.now() + (60*60*60*60)
				}
        		localStorage.setItem("token", JSON.stringify(data));
				this.router.navigate(['/my-projects']);
				return true;
      }
      this.user = false;
			return false;
    	})
    	
      
    } catch (error) {
      console.error(error);
    }
  }

}
