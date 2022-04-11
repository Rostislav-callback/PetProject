import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Store } from "@ngrx/store";
import { registerAction } from "src/app/store/actions/register.action";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    public signupForm!: FormGroup;

    constructor(
        private fb: FormBuilder,
        private store: Store
    ) {}

    ngOnInit(): void {
        this.initForm();
    }

    onSubmit(): void {
        console.log('lol');
        this.store.dispatch(registerAction(this.signupForm.value));
    }

    initForm(): void {
        this.signupForm = this.fb.group({
            username: '',
            email: '',
            password: ''
        })
    }
}