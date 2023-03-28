import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthModule } from '../auth/auth.module';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl: string;
  

  constructor(private http:HttpClient) {
    this.baseUrl = 'http://localhost:8080/authenticate'
   }

   public getToken(data:any): Observable<any>{
    return this.http.post(this.baseUrl,data)
   }


}
