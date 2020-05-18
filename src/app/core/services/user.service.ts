import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { UserArray } from '../model/user.model';
import { RoleArray } from '../model/role.model';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs/internal/observable/throwError';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _jsonUser = 'assets/users.json';
  private _jsonRol = 'assets/roles.json';

  
  constructor(
    private http: HttpClient
  ) { }

  // Get all users
  getUser() {
    return this.http.get<UserArray>(`${environment.serviceUrl}${this._jsonUser}`)
    .pipe(
      // switchMap((data) => {
      //   return  this.http.get<RootObject>(`${environment.serviceUrl}`+`${this._jsonUser}`)
      // }),
      map((res) => res.users,
      catchError(err => {
        console.log(err);
        return throwError(err);
      })
    ));
  }

  // delete a user
  deleteUser(emailUser: string) {
    return this.http.delete(`${environment.serviceUrl}user/${emailUser}`)
  }

  // Get all roles
  getRoles() {
    return this.http.get<RoleArray>(`${environment.serviceUrl}${this._jsonRol}`)
    .pipe(
      map((res: RoleArray) => res.roles,
      catchError(err => {
        console.log(err);
        return throwError(err);
      })
    ));
  }

  
}
