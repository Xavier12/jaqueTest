import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import { DialogAddUserComponent } from './components/dialog-add-user/dialog-add-user.component';
import { FormsModule } from '@angular/forms';
import { TableFilterStatusPipe } from './pipes/table-filter-status/table-filter-status.pipe';
import { TableFilterNamePipe } from './pipes/table-filter-name/table-filter-name.pipe';
import { TableFilterOrderNamePipe } from './pipes/table-filter-order-name/table-filter-order-name.pipe';

@NgModule({
  declarations: [
    NavComponent,
    DialogAddUserComponent,
    TableFilterStatusPipe,
    TableFilterNamePipe,
    TableFilterOrderNamePipe
  ],
  exports: [
    NavComponent,
    DialogAddUserComponent,
    TableFilterStatusPipe,
    TableFilterNamePipe,
    TableFilterOrderNamePipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
