import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './components/users/users.component';
import { SharedModule } from '../shared/shared.module';
import { UserCardComponent } from './components/user-card/user-card.component';

@NgModule({
  declarations: [
    UsersComponent,
    UserCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
