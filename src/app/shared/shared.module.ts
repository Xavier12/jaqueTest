import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import { DialogAddUserComponent } from './components/dialog-add-user/dialog-add-user.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NavComponent,
    DialogAddUserComponent
  ],
  exports: [
    NavComponent,
    DialogAddUserComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
