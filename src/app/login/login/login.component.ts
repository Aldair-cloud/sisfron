import { Login } from './../../models/usuario';
import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  public login:Login = new Login();
  constructor(
    private _loginService:LoginService
  ) { }

  ngOnInit(): void {
  }

  user(){
    console.log(this.login);
    this._loginService.save(this.login).subscribe(
      data => {
        console.log(data)
        alert('Usuario Correcto')
      }
    )
  }
}
