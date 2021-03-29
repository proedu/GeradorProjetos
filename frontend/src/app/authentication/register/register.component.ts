import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../shared/auth.service';
import { Router } from '@angular/router';
import { RestapiService } from 'src/app/services/restapi.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  registerForm = this.formBuilder.group({
    username: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    institution: ['', Validators.required],
    institution_name: ['', Validators.required]
  });

  institutions: any = [
    {name: 'Universidade'}, 
    {name: 'Faculdade'}, 
    {name: 'Instituto Federal'}, 
    {name: 'Centro de Educação Tecnológica'}
  ];

  hide = true;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticationService,
	private router: Router,
	private restService : RestapiService
  ) { }

  ngOnInit() {
  }

  async onSubmit() {
    try {
	//   const result = await this.authService.register(this.registerForm);
	  
	  await this.restService.postApi("auth/register", this.registerForm.value).subscribe(res => {
		  if (res.code === 201) {
			this.router.navigate(['/login']);
		  }
	  })
	

      //navega para rota vazia
    //   
    } catch (error) {
      console.error(error);
    }
  }

}
