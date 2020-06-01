import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../../../core/model/user.model';
import { UserService } from '../../../core/services/user.service';
import { Role } from '../../../core/model/role.model';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent implements OnInit {
  @Output() closeDialog: EventEmitter<boolean> = new EventEmitter();
  @Output() userToSave: EventEmitter<User> = new EventEmitter();

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
    this.closeDialog.emit(false);
  }
  
  saveUser(): void {
    this.userToSave.emit(this.user);
    this.closeModal();
  }

  readURL(event): void {
    if (event.target.files && event.target.files[0].name) {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onload = e => this.user.picture = reader.result.toString();
      reader.readAsDataURL(file);
    }
  }

}
