import { Pipe, PipeTransform } from '@angular/core';
import { User } from 'src/app/core/model/user.model';

@Pipe({
  name: 'tableFilterOrderName'
})
export class TableFilterOrderNamePipe implements PipeTransform {

  transform(userList: User[], typeOrder: any) {
    if (userList?.length) { 
      if (typeOrder === 0) {
        return userList.sort((a, b) => {
          return b.name.localeCompare(a.name);
        });
      } else {
        return userList.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
      }
    }
  }

}
