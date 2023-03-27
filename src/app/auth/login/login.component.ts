
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginData={
    email:'',
    password:'',
  };

  constructor(
    private authServce: AuthService,
    private router: Router ) { }

  ngOnInit(): void {
  }

  formSubmit(){
    this.authServce.getToken(this.loginData).subscribe(data =>{
      
      //  this.dataSource = new MatTableDataSource<accountModel>(data);
       
       localStorage.setItem('token',data.token)
       console.log(data)
       this.router.navigateByUrl('app')
      })
  }

}
