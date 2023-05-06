import { Component, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.scss']
})
export class CustomerDashboardComponent {
  modalRef?: BsModalRef;
  constructor(private modalService:BsModalService){}

  openSearchCustomerModal(template: TemplateRef<any>){
    this.modalRef = this.modalService.show(template, Object.assign({}, { class: "modal-lg"}));
  }
}
