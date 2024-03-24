import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Input() data: any;

  @Output() newItemEvent = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {
    this.newItemEvent.emit('Cdata');
  }
}
