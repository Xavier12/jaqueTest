import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/model/user.model';
import { UserService } from 'src/app/core/services/user.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[];
  displayDataTableFormat: boolean;
  formData = {
    searchByName: '',
    orderByName: 0,
    orderByStatus: 0
  };
  constructor(
    private userService: UserService
  ) {
    this.displayDataTableFormat = true;
  }

  ngOnInit(): void {
    this.userService.getUser()
    // .pipe(
    //   switchMap((data) => {
    //     console.log(data)
    //     return this.userService.getRoles()
    //   }),
    // )
    .subscribe(userList => {
      this.showUsers(userList);
    },
    err => {
      console.log(err);
    });
  }

  showUsers(userList: User[]): void {
    this.userService.getRoles()
    .subscribe(rolesList => {
      this.users = userList.map(userItem => {
        const positionMatch = rolesList.find(roleitem => roleitem.id === userItem.roleId)
        userItem.roleName = positionMatch.position;
        return userItem;
      });
    },
    err => {
      console.log(err);
    });
  }

  showTableFormate(): void {  
    this.displayDataTableFormat = true;
  }

  showCardFormate(): void {
    this.displayDataTableFormat = false;
  }

  updateListUser(userItem: User): void {
    this.users.push(userItem);
    this.showUsers(this.users);
  }

  userDelete(emailUser: string): void {
    if (confirm(`¿Desea eliminar el registro con email ${emailUser}?`)) {
      this.users = this.users.filter(userItem => userItem.email !== emailUser);
    }
  }

}
