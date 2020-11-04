import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-board-edit',
  templateUrl: './board-edit.component.html',
  styleUrls: ['./board-edit.component.scss']
})
export class BoardEditComponent {
  @Input() column;
  
  closeEdit() {
    this.column = !this.column;
  }
}