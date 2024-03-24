import {
  Component,
  OnInit,
  ContentChild,
  AfterViewInit,
  ContentChildren,
} from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit, AfterViewInit {
  @ContentChild('para') component: any;

  @ContentChildren('data') components: any;

  constructor() {}
  ngAfterViewInit(): void {
    console.log(this.component.nativeElement);

    this.components.forEach((component: any) =>
      console.log(component.nativeElement)
    );
  }

  ngOnInit(): void {}
}
