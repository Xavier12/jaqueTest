import { Pipe, PipeTransform } from '@angular/core';
import { User } from 'src/app/core/model/user.model';

@Pipe({
  name: 'tableFilterName'
})
export class TableFilterNamePipe implements PipeTransform {

  transform(userList: User[], nameEmailUser: string) {
    if (userList?.length && nameEmailUser) {
      return userList.filter(userItem => (userItem.email.toUpperCase().indexOf(nameEmailUser.toUpperCase()) > -1 || userItem.name.toUpperCase().indexOf(nameEmailUser.toUpperCase()) > -1));
    } else {
      return userList;
    }
  }

}
