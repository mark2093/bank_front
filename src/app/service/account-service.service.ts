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
    this.accountUrl = 'http://localhost:8080/account/1234567'
   }
   

   public getAccountDetails(): Observable<accountModel[]>{
    const header ={
      'Authorization' : 'Bearer '+ localStorage.getItem('token')
     }
    return this.http.get<accountModel[]>(this.accountUrl,{headers:header})
   }
}
