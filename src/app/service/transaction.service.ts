import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//import { accountModel } from '../model/account-model';
import{transactionModel}  from '../model/transaction-model'


@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private accountUrl: string;

  constructor(private http:HttpClient) {
    this.accountUrl = 'http://localhost:8088/'
   }
  public gettransactionDetails(): Observable<transactionModel[]>{
    return this.http.get<transactionModel[]>(this.accountUrl)
}
}
