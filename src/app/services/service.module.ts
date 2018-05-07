import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  SettingsService,
  SidebarService,
  SharedService,
  SubirArchivoService
 } from './service.index';


@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    SettingsService,
    SidebarService,
    SharedService,
    SubirArchivoService
  ],
  declarations: []
})
export class ServiceModule { }
