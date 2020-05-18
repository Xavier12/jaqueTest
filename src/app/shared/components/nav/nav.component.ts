import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  showDialodAddUser = false;
  constructor() { }

  ngOnInit(): void {
  }

  showDialog(): void {
    let modal = document.getElementById("modal-add");
    modal.style.display = "block";
  }

  showAddDialog(): void {
    this.showDialodAddUser = true;
  }

}
