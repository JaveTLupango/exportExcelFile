import { ExportExcelFileCustomComponent } from './export-excel-file-custom/export-excel-file-custom.component';
import { ExportCustomExcelFileComponent } from './export-custom-excel-file/export-custom-excel-file.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExportExcelFileComponent } from './export-excel-file/export-excel-file.component';

const routes: Routes = [
  { path: 'exportExcelFile' , component:ExportExcelFileComponent},
  { path: 'exportCustomExcelFile' , component:ExportCustomExcelFileComponent},
  { path: 'exportToExcel' , component:ExportExcelFileCustomComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
