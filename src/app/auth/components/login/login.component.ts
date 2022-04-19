import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup,  Validators } from "@angular/forms";
import { Store, select } from "@ngrx/store";

import { Observable } from "rxjs";

import { BackendErrorsInterface } from "src/app/interfaces/backendErrors.interface";
import { LoginRequestInterface } from "src/app/interfaces/loginRequest.interface";
import { loginAction } from "src/app/store/actions/login.action";
import { isSubmittingSelector, validationErrorsSelector } from "src/app/store/selectors/authSelector";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  validators = [Validators.required];
  isSubmitting$!: Observable<boolean>;
  backendErrors$!: Observable<BackendErrorsInterface | null>;

  constructor(private fb: FormBuilder, private store: Store) {} 

  ngOnInit(): void {
      this.initForm();
      this.initializeValues();
  }

  onSubmit(): void {
      const request: LoginRequestInterface = {
          user: this.loginForm.value
      };
      
      this.store.dispatch(loginAction({request}));
  }

  initializeValues(): void {
      this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
      this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
  }

  get email() {
      return this.loginForm.get('email');
  }
  
  get password() {
      return this.loginForm.get('password');
  }

  initForm(): void {
      this.loginForm = this.fb.group({
          email: ['', ...this.validators],
          password: ['', ...this.validators]
      })
  }
}
