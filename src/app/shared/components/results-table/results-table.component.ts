import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../core/services/user.service';
import { User } from 'src/app/core/model/user.model';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-results-table',
  templateUrl: './results-table.component.html',
  styleUrls: ['./results-table.component.scss']
})
export class ResultsTableComponent implements OnInit {
  users: User[];
  constructor(
    private userService: UserService
  ) { 
  
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
      this.showUsers(userList)
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
    const card = document.getElementById('container-card-result');
    card.style.display = 'none';

    const table = document.getElementById('container-table-result');
    table.style.display = 'block';
  }

  showCardFormate(): void {
    const table = document.getElementById('container-table-result');
    table.style.display = 'none';

    const card = document.getElementById('container-card-result');
    card.style.display = 'block';
  }

}
