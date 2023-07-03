import { Component } from '@angular/core';
import { ToastrService  } from 'ngx-toastr';

import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent {

  constructor(private toastr: ToastrService){}

  // ngOnInit(){
  //   console.log("On initialize");
  //   this.toastr.success("everything is broken", "Major Error", {
  //     timeOut: 9000,
  //   });
  // }


  resetForm = new FormGroup({
    oldPassword: new FormControl("", Validators.required),
    newPassword: new FormControl("" , Validators.required),
    confirmPassword: new FormControl("" , Validators.required),
  });

  submitResetPassworForm() {


    if(this.resetForm.value.newPassword !== this.resetForm.value.confirmPassword){
      this.toastr.error("New Password and Confirm password does not match.", "Error", {
        timeOut: 9000,
      });
    }
    else{
      this.toastr.success("Password reset success", "Success", {
        timeOut: 9000,
      });
    }

  }

}
