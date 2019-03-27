import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
 @Output() data = new EventEmitter<string>();
  constructor() { }

call(data: string) {
this.data.emit(data);
}
  ngOnInit() {
  }

}
