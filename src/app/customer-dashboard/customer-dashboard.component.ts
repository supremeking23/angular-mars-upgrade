import { Component, TemplateRef, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.scss']
})
export class CustomerDashboardComponent {
  modalRef?: BsModalRef;
  selectedOptionForApprovalStatus = "Live Data";
  selectedOptionForIdentityDocumentType = "--Please make a selection--";
  constructor(private modalService:BsModalService){}
  

  openModal(template: TemplateRef<any>){
    this.modalRef = this.modalService.show(template, Object.assign({}, { class: "modal-lg", style: "width: 1200px"}));

  }

  submitSearchCustomer(form: NgForm, event: Event) {
    event.preventDefault();

    //delay after fetching of data
    setTimeout(()=>{
      this.modalRef?.hide()
    }, 2000);
    console.log(form.value);
  }
}
