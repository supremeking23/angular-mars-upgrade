import { Component, TemplateRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent {
  modalRef?: BsModalRef;

  selectedOption: string = "";

  onOptionChange(option: string){
    this.selectedOption = option;
  }

  constructor(private modalService:BsModalService){}

  searchModal(template: TemplateRef<any>){
    this.modalRef = this.modalService.show(template, Object.assign({}, { class: "modal-lg", style: "width: 1200px"}));
  }

  addModal(template: TemplateRef<any>){
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
