import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CourseService } from "./course.service";
import { Course } from "./courser";

@Component({
    templateUrl: './course-info.component.html'
})

export class CourseInfoComponent implements OnInit{
    
    course: Course = new Course;

    constructor(private ActivatedRoute: ActivatedRoute, private courseService: CourseService){

    }
    
    ngOnInit(): void {
        this.courseService.retrieveById(+this.ActivatedRoute.snapshot.paramMap.get('id')!).subscribe({
            next: course => this.course = course,
            error: err => console.log("Error" , err)
        });
    }

    save(): void{
        this.courseService.save(this.course).subscribe({
            next: course => console.log('Saved witj success', course),
            error: err => console.log("Error in save", err)
        })
    }
    

}