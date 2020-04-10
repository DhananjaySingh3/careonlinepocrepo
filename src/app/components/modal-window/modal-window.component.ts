import { Component, OnInit, Input, ElementRef, OnDestroy, OnChanges, Output, EventEmitter } from '@angular/core';
import { NgbModal, NgbModalConfig, NgbActiveModal, NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { StackedModalComponent } from './stacked-modal/stacked-modal.component';


@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class ModalWindowComponent implements OnInit, OnDestroy, OnChanges {
  @Input() isPopupOpen: boolean;
  heading = 'Member Eligibility Details';

  // MODALS: {[name: string]: Type<any>} = {
  //  // focusFirst: NgbdModalConfirm,
  //   autofocus: NgbdModalConfirmAutofocus
  // };

  constructor(
    public config: NgbModalConfig,
    private modalService: NgbModal,
    public activeModal: NgbActiveModal,
    private elementRef: ElementRef,
  //  public ngbdModalConfirmAutofocus: NgbdModalConfirmAutofocus
  ) {
     config.backdrop = 'static';
    // config.backdrop = true;
     config.keyboard = false;
   }

  ngOnInit() {
    // document.body.appendChild(this.elementRef.nativeElement);
  }

  toggleModal() {

  }

  // modalClose() {
  //   this.activeModal.close();
  // }

  open() {
    // const modalRef = this.modalService.open(ModalWindowComponent);
   // modalRef.componentInstance.name = 'World';

   this.modalService.open(StackedModalComponent, {size: 'sm', centered: true });
  }

  // Called anytime whenever a property on the component changes or data passed from parent component changes
  ngOnChanges() {

  }

  ngOnDestroy() {
    // We must delete our modal from the body when we move away from the modules component
    // this.elementRef.nativeElement.remove();
  }

  public beforeChange($event: NgbTabChangeEvent) {
    // if ($event.nextId === 'tab-preventchange2') {
    //   $event.preventDefault();
    // }
  }

}
