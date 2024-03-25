import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-course',
    templateUrl: './course.component.html'
})
export class CourseComponent implements OnInit {
    courses = [
        { id: 1, name: 'Java' },
        { id: 2, name: 'python' },
        { id: 3, name: 'C++' },
    ]

    courseId: number;
    selectedCourse: any;

    constructor(private activeRoute: ActivatedRoute) { }

    ngOnInit(): void {
        // this.courseId = +this.activeRoute.snapshot.paramMap.get('id');
        // this.selectedCourse = this.courses.find((course) => course.id === this.courseId);

        // better approach
        this.activeRoute.paramMap.subscribe((data) => {
            this.courseId = +data.get('id');
            this.selectedCourse = this.courses.find((course) => course.id === this.courseId);
        })
    }

}
