import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule, NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalWindowComponent } from './components/modal-window/modal-window.component';
import { StackedModalComponent } from './components/modal-window/stacked-modal/stacked-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalWindowComponent,
    StackedModalComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [NgbModal],
  bootstrap: [AppComponent],
  entryComponents: [ModalWindowComponent, StackedModalComponent]
})
export class AppModule { }
