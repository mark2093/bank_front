import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { StudentManagementComponent } from "./student-management.component";
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { StudentDetailsComponent } from './student-details/student-details.component';

const HOME_ROUTE = [
    { path: '', component: StudentManagementComponent }
];

@NgModule({
    declarations: [
        StudentManagementComponent,
        StudentDetailsComponent
    ],
    imports: [

        RouterModule.forChild(HOME_ROUTE),
        MatInputModule,
        MatPaginatorModule,
        MatSortModule,
        MatProgressSpinnerModule,
        MatTableModule,
        HttpClientModule,
        CommonModule
    ]
})


export class StudentManagement { }