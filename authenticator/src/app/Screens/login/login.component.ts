import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { loginUser } from 'src/app/Data/Dto/User/loginUser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public formGroup!: FormGroup;
  public nuevoUsuario: loginUser = new loginUser();

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }


  ngOnInit(): void {
    this.validacionFormaulario();
  }

  private validacionFormaulario() {
    this.formGroup = this.formBuilder.group({
      email: [this.nuevoUsuario.email, [Validators.required, Validators.email]],
      password: [this.nuevoUsuario.password, [Validators.required, Validators.minLength(8)]],
    });
  }

  login() {
    this.nuevoUsuario.email = this.formGroup.get('email')?.value;
    this.nuevoUsuario.password = this.formGroup.get('password')?.value;
  }

}
