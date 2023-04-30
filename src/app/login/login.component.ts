import { Component } from '@angular/core';
import { User } from './../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  // @ViewChild("userIdInput") userIdInput: ElementRef;
  // @Input() user?: User;


  user: User = {
    user_id: "default",
    password: "boomer"
  };

  user_id: string = "";
  password: string = "";

  constructor() { 

  }

  ngOnInit(): void {
    
  }

  checkFormFieldOnKeyUp(field: string, value: string): void {
    let login_button = document.querySelector('.login_btn') as HTMLButtonElement;
    if(field === "user_id"){
      this.user_id = value;
    }
    else {
      this.password = value;
    }

    if(this.user_id !== "" && this.password !==""){
      login_button.disabled = false;
    }else{
      login_button.disabled = true;
    }
    console.log(login_button.disabled)


  }

  submitLogin(event: Event): void {
    console.log("prevent default");

    console.log(`user_id: ${this.user_id}`);
    console.log(`password: ${this.password}`);
    event.preventDefault();
  }
 
}
