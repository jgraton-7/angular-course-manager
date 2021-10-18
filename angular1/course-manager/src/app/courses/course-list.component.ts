import { Component, OnInit } from "@angular/core";
import { CourseService } from "./course.service";
import { Course } from "./courser";

@Component({
    templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit{
    
    filteredCourses: Course[] = [];

    _courses: Course[] = [];

    _filterBy: String = "";

    constructor(private couserService: CourseService){}
    
    ngOnInit(): void {
        this.retrieveAall();
    }

    retrieveAall(): void{
        this.couserService.retrieveAll().subscribe({
            next: courses => {
                this._courses = courses;
                this.filteredCourses = this._courses;
            },
            error: err => console.log("Error", err)
        });
    }

    deleteById(courseId: number): void{
        this.couserService.deleteById(courseId).subscribe({
            next: () => {
                console.log("Deleted with success");
                this.retrieveAall();
            },
            error: err => console.log("Error in delet", err)
        })
    }

    set filter(value: String){
        this._filterBy = value;
        this.filteredCourses = this._courses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
    }

    get filter(){
        return this._filterBy;
    }


}