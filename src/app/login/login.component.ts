import { AuthenticationService } from './../services/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthenticationService) { }

email: string;
password: string;

  ngOnInit() {
  }

  singIn() {
    this.auth.singIn(this.email, this.password);
  }

}


