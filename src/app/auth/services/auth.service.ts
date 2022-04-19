import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { CurrentUserInterface } from "src/app/interfaces/currentUser.interface";
import { RegisterRequestInterface } from "src/app/interfaces/registerRequest.interface";
import { HttpClient } from "@angular/common/http"
import { environment } from "src/environments/environment";
import { AuthResponseInterface } from "src/app/interfaces/authResponse.interface";
import { LoginRequestInterface } from "src/app/interfaces/loginRequest.interface";

@Injectable()
export class AuthService {

    constructor(private http: HttpClient) {}

    getUser(response: AuthResponseInterface): CurrentUserInterface {
        return response.user;
    }

    register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
        const url = environment.apiUrl + '/users';

        return this.http.post<AuthResponseInterface>(url, data).pipe(
            map(this.getUser)
        )
    }

    login(data: LoginRequestInterface): Observable<CurrentUserInterface> {
        const url = environment.apiUrl + '/users/login';

        return this.http.post<AuthResponseInterface>(url, data).pipe(
            map(this.getUser)
        )
    }

    getCurrentUser(): Observable<CurrentUserInterface> {
        const url = environment.apiUrl + '/user';

        return this.http.get<AuthResponseInterface>(url).pipe(
            map(this.getUser)
        )
    }
}