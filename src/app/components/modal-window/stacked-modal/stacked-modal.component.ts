import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgbModal, NgbModalConfig, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-stacked-modal',
  templateUrl: './stacked-modal.component.html',
  styleUrls: ['./stacked-modal.component.css']
})
export class StackedModalComponent implements OnInit {

 // @Output() close = new EventEmitter();

  constructor(
    public config: NgbModalConfig,
    // private modalService: NgbModal,
    public activeModal: NgbActiveModal,
    // private elementRef: ElementRef,
  ) {
    config.backdrop = 'static';
   // config.backdrop = true;
    config.keyboard = false;
  }

  ngOnInit() {
  }

  // modalClose(text: string) {
  //   this.close.emit();
  // }

  // dismiss(text: string) {
  //   this.activeModal.dismiss();
  // }

}
