import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  parentData: string = 'Pdata';
  showChildData: boolean = false;
  childData: any;

  constructor() {}

  ngOnInit(): void {}

  displayChildData(data: any) {
    this.showChildData = true;
    this.childData = data;
  }
}
