import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  // styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // router: Router = inject(Router);

  constructor(private router: Router, private activeRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
  }

  navigateToCourses() {
    // ---- Default is absolute ----
    // this.router.navigate(['Courses', '1']); /Courses/1
    //  this.router.navigate(['Courses'], {relativeTo: this.activeRoute});
    this.router.navigateByUrl('Courses');
  }

}
