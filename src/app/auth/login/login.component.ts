
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
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
    private userService : UserService,
    private router: Router ) { }

  ngOnInit(): void {
  }

  formSubmit(){
    this.authServce.getToken(this.loginData).subscribe(data =>{
      
            
       localStorage.setItem('token',data.token)
       console.log(data)
       this.userService.getCurrentUserDetails(this.loginData.email).subscribe(data =>{
        localStorage.setItem('user',JSON.stringify(data))
       })
      this.router.navigateByUrl('app')
      })
  }

  public signUp(){
    this.router.navigateByUrl("auth/signup");
  }

}
