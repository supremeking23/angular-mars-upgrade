import { Component } from '@angular/core';
import { User } from './../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  // @ViewChild("userIdInput") userIdInput: ElementRef;
  // @Input() user?: User;


  /* sample data for login process */
  user: User = {
    user_id: "default",
    password: "boomer"
  };

  /* properties that will house the data from the FORM  */
  user_id: string = "";
  password: string = "";

  invalidCredential?: boolean;

  constructor(private router: Router) { 

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
      // login_button.disabled = false;
      login_button.classList.remove("disable_btn");
    }else{
      // login_button.disabled = true;
      login_button.classList.add("disable_btn");
    }
   
  }

  submitLogin(event: Event): void {    
    let user_id = this.user_id;
    let password = this.password;
    let sample_user = this.user;
    // let error_message = document.querySelector(".error_message.login") as HTMLButtonElement;

    /**
     * TODO: change code after when you have 80% of the UI
     * TODO: checking of user if exist from the database
     **/
    if(user_id !== sample_user.user_id || password !== sample_user.password ){
      // error_message.classList.remove(".hidden");
      this.invalidCredential = true;
    }
    else{
      this.invalidCredential = false;
      this.router.navigate(["/customer-dashboard"]);
    }
    
    console.log(`user_id: ${this.user_id}`);
    console.log(`password: ${this.password}`);
    event.preventDefault();
  }
 
}
