import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup,  Validators } from "@angular/forms";
import { Store, select } from "@ngrx/store";

import { Observable } from "rxjs";

import { BackendErrorsInterface } from "src/app/interfaces/backendErrors.interface";
import { RegisterRequestInterface } from "src/app/interfaces/registerRequest.interface";
import { registerAction } from "src/app/store/actions/register.action";
import { isSubmittingSelector, validationErrorsSelector } from "src/app/store/selectors/authSelector";
import { AuthService } from "../../services/auth.service";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    signupForm!: FormGroup;
    validators = [Validators.required];
    isSubmitting$!: Observable<boolean>;
    backendErrors$!: Observable<BackendErrorsInterface | null>;

    constructor(private fb: FormBuilder, private store: Store) {} 

    ngOnInit(): void {
        this.initForm();
        this.initializeValues();
    }

    onSubmit(): void {
        const request: RegisterRequestInterface = {
            user: this.signupForm.value
        };
        
        this.store.dispatch(registerAction({request}));
    }

    initializeValues(): void {
        this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
        this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
    }

    get email() {
        return this.signupForm.get('email');
    }
    
    get password() {
        return this.signupForm.get('password');
    }
    
    get username() {
        return this.signupForm.get('username');
    }

    initForm(): void {
        this.signupForm = this.fb.group({
            username: ['', ...this.validators],
            email: ['', ...this.validators],
            password: ['', ...this.validators]
        })
    }
}