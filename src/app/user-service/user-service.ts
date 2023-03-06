import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { take } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { RoleEnum } from "../models/enums/Role";
import { User } from "../models/User"

const user: User = {
    id: '1',
    name: 'asf',
    email: 'asd',
    role: RoleEnum.ADMIN
}

@Injectable()
export class UserService {

    constructor(private http: HttpClient) { }

    isLoggedIn() {
        console.log(!!localStorage.getItem('user'));
       return !!localStorage.getItem('user');
    }

    login(user: User) {
        return this.http.post<User>(`${environment.apiUrl}/user/login`, user);
    }

    logout() {
        
    }
}