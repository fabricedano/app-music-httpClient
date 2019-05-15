import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  messageError: string = null;

  constructor(
    private authService: AuthService,
    private router : Router) { 
    }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.authService.auth(form.value['email'], form.value['password']).then(() => {
      this.router.navigate(["/dashboard"], {queryParams: {message: 'success'}})
    }).catch(e => this.messageError = "error login")


  }
}
