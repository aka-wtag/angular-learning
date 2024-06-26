import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { Observable, from, of } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  data: any[] = [];

  @ViewChild('createbtn')
  createBtn: ElementRef;

  createBtnObs;

  // myObservable = new Observable((observer) => {
  //   setTimeout(() => { observer.next(1) }, 1000);
  //   setTimeout(() => { observer.next(2) }, 2000);
  //   setTimeout(() => { observer.next(3) }, 3000);
  //   //setTimeout(() => { observer.error(new Error('Some error')) }, 3000);
  //   setTimeout(() => { observer.next(4) }, 4000);
  //   setTimeout(() => { observer.next(5) }, 5000);
  //   setTimeout(() => { observer.complete() }, 6000);
  // });

  // array1 = [1, 3, 5, 7, 9];
  // array2 = ['A', 'B', 'C', 'D'];
  //myObservable = of(this.array1, this.array2, 20, 30, 'Hello', true);

  promiseData = new Promise((resolve, reject) => {
    resolve([10, 20, 30, 40, 50]);
  });

  myObservable = from([2, 4, 6, 8, 10, 12]).pipe(
    map((val) => {
      return val * 5;
    }),
    filter((val, i) => {
      return val % 4 === 0;
    })
  );

  // filteredObs = this.myObservable.pipe(map((val) => {
  //   return val * 5;
  // }), filter((val, i) => {
  //   return val % 4 === 0;
  // }))

  // filteredObs = this.transformedObs.pipe(filter((val, i) => {
  //   return val % 4 === 0;
  // }))

  GetAsyncData() {
    // this.myObservable.subscribe((val: any) => {
    //   this.data.push(val);
    // },
    // (err) => {
    //   alert(err.message);
    // },
    // () => {
    //   alert('All the data is streamed!')
    // });

    this.myObservable.subscribe({
      next: (val: any) => {
        this.data.push(val);
        console.log(val);
      },
      error(err) {
        alert(err.message);
      },
      complete() {
        alert('All the data is retrived!');
      },
    });
  }

  buttonClicked() {
    let count = 0;
    this.createBtnObs = fromEvent(
      this.createBtn.nativeElement,
      'click'
    ).subscribe((data) => {
      console.log(data);
      this.showItem(++count);
    });
  }

  ngAfterViewInit() {
    this.buttonClicked();
  }

  showItem(val) {
    let div = document.createElement('div');
    div.innerText = 'Item' + val;
    document.getElementById('container').appendChild(div);
  }
}
