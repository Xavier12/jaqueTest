import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/core/model/user.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @Output() addUser: EventEmitter<User> = new EventEmitter();
  showDialodAddUser = false;
  constructor() { }

  ngOnInit(): void {
  }

  showAddDialog(): void {
    this.showDialodAddUser = true;
  }

  clickProduct(hide: boolean): void {
    this.showDialodAddUser = hide;
  }

  saveUser(userItem: User): void {
    this.addUser.emit(userItem);
  }

}
