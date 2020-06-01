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
  displayDataTableFormat: boolean
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

  searchUsersTable(event: KeyboardEvent) {
    const inputValue = ((event.target as HTMLInputElement).value).toUpperCase();
    let tr = document.getElementById('table-body').getElementsByTagName('tr');

    for (let i = 0; i < tr.length; i++) {
      const name = tr[i].getElementsByTagName('td')[1];
      const email = tr[i].getElementsByTagName('td')[4];

      const nameText = name.textContent || name.innerText;
      const emailText = email.textContent || email.innerText;
      
      if (nameText.toUpperCase().indexOf(inputValue)> -1 || emailText.toUpperCase().indexOf(inputValue)> -1) {
        tr[i].style.display = '';
      } else {
        tr[i].style.display = 'none';
      }
    }
  }

  changeByOrder(event: KeyboardEvent) {
    
  }

  changeOrder(): void {
    this.users.sort((a, b) => {
      return b.name.localeCompare(a.name);
    });
  }

  updateListUser(userItem: User): void {
    this.users.push(userItem);
    this.showUsers(this.users);
  }

}
