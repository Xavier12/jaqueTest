import { Component, OnInit, Input, Output } from '@angular/core';
import { User } from 'src/app/core/model/user.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
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
