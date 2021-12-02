import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm :  FormGroup = new FormGroup({});

  constructor() { }

  ngOnInit(){
    this.loginForm = new FormGroup(
      {
        email : new FormControl('',[Validators.required, Validators.email]),
        password : new FormControl('',[Validators.required, Validators.minLength(6)])
      }
    );
  }

  onLogin(){

  }

  getControl(formGroup: any, formControlIdentifier: any){
    return formGroup.get(formControlIdentifier);
  }

  getControlErrors(formControl: any): any{
    return Object.keys(formControl?.errors || {});
  }

}
