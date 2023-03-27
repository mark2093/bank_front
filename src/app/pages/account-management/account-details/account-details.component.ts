import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AccountService } from '../../../service/account-service.service';
import { accountModel } from '../../../model/account-model';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss']
})
export class AccountDetailsComponent implements OnInit {

  displayedColumns: string[] = ['id','rollno', 'name','semester','year'];
  dataSource : any
  accountsData:any;
  isloading = true
  constructor(private accountService : AccountService) { }

  ngOnInit() {
    this.accountService.getAccountDetails().subscribe(data =>{
    this.isloading= false
    //  this.dataSource = new MatTableDataSource<accountModel>(data);
     this.accountsData = data
     
     console.log(this.accountsData)
    })
  }

}

