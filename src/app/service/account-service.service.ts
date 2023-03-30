import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { accountModel } from '../model/account-model';

@Injectable({
  providedIn: 'root',
})
export class AccountService {

  private accountUrl: string;
  

  constructor(private http:HttpClient) {
    this.accountUrl = 'http://localhost:8088/account/'
   }
   

   public getAccountDetails(acctNumber:any): Observable<accountModel[]>{
    const url = this.accountUrl + 'user/' + acctNumber
    const header ={
      'Authorization' : 'Bearer '+ localStorage.getItem('token')
     }
    return this.http.get<accountModel[]>(url,{headers:header})
   }
}
