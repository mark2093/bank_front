import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { StudentModel } from '../../model/student-model';

@Component({
  selector: 'app-student-management',
  templateUrl: './student-management.component.html',
  styleUrls: ['./student-management.component.scss']
})
export class StudentManagementComponent implements AfterViewInit {
  displayedColumns: string[] = ['id','rollno', 'name','semester','year'];
  dataSource = new MatTableDataSource<StudentModel>(students);

  // @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { 
  
  }

  

  ngAfterViewInit(): void {
    // this.dataSource.paginator = this.paginator;
  }

  onRowClicked(row:any) {
    console.log('Row clicked: ', row);
}

}
const students: StudentModel[] =[
  {id:1,rollNo:101,name:'Mark',semester:'II',year:'First'},
  {id:2,rollNo:102,name:'Avinash',semester:'II',year:'First'}
]

