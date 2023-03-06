import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user-service/user-service';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent implements OnInit {

  loginForm!: UntypedFormGroup;

  constructor(
    private userService: UserService, 
    private router: Router,
    private fb: UntypedFormBuilder
    ) { }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.loginForm = this.fb.group({
      email: ["", [Validators.required]],
      password: ["", [Validators.required]]
    });
  }

  login() {
    const formVal = this.loginForm.value;
    console.log(formVal);
    this.userService.login(formVal).subscribe((res) => {
      if (res === formVal) {
        this.router.navigate(["/main"]);
      }
    });
  }
}
