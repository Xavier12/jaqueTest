import { Component, OnInit } from '@angular/core';
import { User } from '../core/model/user.model';
import { UserService } from '../core/services/user.service';
import { Role } from '../core/model/role.model';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent implements OnInit {
  user: User;
  rolesList: Role[];

  constructor(
    private userService: UserService
  ) {
    this.user = {
      active: false,
      fathersLastName: '',
      email: '',
      mothersLastName: '',
      name: '',
      picture: '',
      roleId: 0,
      roleName: ''
    }
   }

  ngOnInit(): void {
    this.userService.getRoles()
    .subscribe(response => {
      this.rolesList = response
    },
    err => {
      console.log(err);
    });
  }

  closeModal(): void {
    let modal = document.getElementById('modal-add');
    modal.style.display = 'none';
  }
  
  saveUser(): void {
    
  }

}
