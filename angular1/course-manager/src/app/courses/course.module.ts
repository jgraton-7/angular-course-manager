import { NgModule } from "@angular/core";
import { CourseListComponent } from './course-list.component'
import { CourseInfoComponent } from './course-info.component'
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { starModule } from "../shared/component/star/star.module";
import { appPipeModule } from "../shared/pipe/app-pipe.module";

@NgModule({
    declarations:[
        CourseListComponent,
        CourseInfoComponent,
    ],
    imports:[
        appPipeModule,
        FormsModule,
        CommonModule,
        starModule,
        RouterModule.forChild([
        {
            path: 'courses', component: CourseListComponent
        },
        {
            path: 'courses/info/:id', component: CourseInfoComponent
        },

        ])
    ]
})

export class courseModule{ }