import { Component } from '@angular/core';
import { NgbModal, NgbModalConfig, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalWindowComponent } from './components/modal-window/modal-window.component';
import { StackedModalComponent } from './components/modal-window/stacked-modal/stacked-modal.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [NgbActiveModal],
})
export class AppComponent {
  title = 'angular7';
  isModalOpen = true;

  constructor(
    private modalService: NgbModal,
    public config: NgbModalConfig,
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  open() {
    this.modalService.open(ModalWindowComponent, { size: 'lg' , centered: true });
    // this.modalService.open(StackedModalComponent);
  }
}
