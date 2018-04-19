import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  @Output()
  menuToggle = new EventEmitter();

  constructor() {
  }

  toggleMenu() {
    this.menuToggle.emit();
  }
}
