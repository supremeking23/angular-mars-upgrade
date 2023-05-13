import { Component, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-search-customer-modal',
  templateUrl: './search-customer-modal.component.html',
  styleUrls: ['./search-customer-modal.component.scss']
})
export class SearchCustomerModalComponent {
  modalRef?: BsModalRef;

  constructor(private modalService: BsModalService){}
  openModal(template: TemplateRef<any>){
    this.modalRef = this.modalService.show(template, Object.assign({}, { class: "modal-lg"}));
  }
}
