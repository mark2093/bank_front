import { Component, OnInit } from '@angular/core';
import { TransactionService } from 'src/app/service/transaction.service';


@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {
  transactionData:any;
  constructor(
    private transactionService : TransactionService
  ) { }

  ngOnInit(): void {
    let userId = localStorage.getItem('user');
    if(userId != null){
      userId = JSON.parse(userId).id   
    }
    console.log(userId)
   // this.transactionService.gettransactionDetails(userId).subscribe((data: any[]) =>{
        //  this.dataSource = new MatTableDataSource<accountModel>(data);
    // this.transactionData = data[0]
     
    /// console.log(this.transactionData)
   // })
   
      }
  }


