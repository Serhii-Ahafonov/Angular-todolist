import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor() { 
    // loginGroup = new FormGroup ({
    //   email: new FormControl(''),
    //   password: new FormControl('')

    // })
  }

  ngOnInit(): void {
  }
  // onSubmit(){
  //   console.log(this.loginGroup);
    
  // }

}
