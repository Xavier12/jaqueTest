import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/core/model/user.model';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
  @Input() user: User;

  constructor() { }

  ngOnInit(): void {
  }

  deleteUser(): void {
    const response = confirm('¿Desea eliminar este usuario?')
    if (response) {
      alert('Registro Eliminado!')
    }
  }

}
