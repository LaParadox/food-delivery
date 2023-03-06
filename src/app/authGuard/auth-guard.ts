import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot,
    UrlTree,
  } from "@angular/router";
  import { Injectable } from "@angular/core";
  import { Observable, of } from "rxjs";
  import { UserService } from "../user-service/user-service";
  
  @Injectable()
  export class AuthGuard implements CanActivate {
    constructor(private router: Router, private userService: UserService) {}
  
    canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
    ): Observable<boolean> {
       if (this.userService.isLoggedIn()) {
        console.log('loggedIn');
         return of(true);
       } else {
        console.log('notLoggedIn');
         this.router.navigateByUrl("/");
         return of(false);
       } 
    }
  }