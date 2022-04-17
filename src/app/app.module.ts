import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExportExcelFileComponent } from './export-excel-file/export-excel-file.component';
import { ExportCustomExcelFileComponent } from './export-custom-excel-file/export-custom-excel-file.component';
import { ExportExcelFileCustomComponent } from './export-excel-file-custom/export-excel-file-custom.component';

@NgModule({
  declarations: [
    AppComponent,
    ExportExcelFileComponent,
    ExportCustomExcelFileComponent,
    ExportExcelFileCustomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
