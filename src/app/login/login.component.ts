import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } from 'constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm :  FormGroup;
  constructor() { }

  ngOnInit(){
    this.loginForm = new FormGroup(
      {
        email : new FormControl('',[Validators.required, Validators.email]),
        password : new FormControl('',[Validators.required, Validators.minLength(6)])
      }
    );
  }

}

onLogin(){

}
