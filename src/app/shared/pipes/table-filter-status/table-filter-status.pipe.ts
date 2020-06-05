import { Pipe, PipeTransform } from '@angular/core';
import { User } from 'src/app/core/model/user.model';

@Pipe({
  name: 'tableFilterStatus'
})
export class TableFilterStatusPipe implements PipeTransform {

  transform(userList: User[], value: any) {
    switch (value) {
      case 1:
        return value ? userList.filter(userItem => userItem.active === true) : userList;
        break;
      case 2:
        return value ? userList.filter(userItem => userItem.active === false) : userList;
        break;
      default:
        return userList
        break;
    }
  }

}
