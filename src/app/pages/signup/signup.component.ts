import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  public user = {
    FirstName:'',
    LastName:'',
    Email:'',
    Password:'',
    PhoneNo:'',
 };

  constructor() { }

  ngOnInit(): void {
  }
  formSubmit(){
    if(this.user.Email==''||this.user.Email==null)
    {
      alert('Email is required!!')
    }
    alert('submit');
  
    this.userService.addUser(this.user).subscribe(
      (data)=>
      {
        alert("Success");
      },
      (error)=>{
        console.log(error)
        alert("SOMETHING WENT WRONG");
      }
      
    );
  }

}
