import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExportExcelFileComponent } from './export-excel-file/export-excel-file.component';

const routes: Routes = [{ path: 'exportExcelFile' , component:ExportExcelFileComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
