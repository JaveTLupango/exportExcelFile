import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-export-excel-file',
  templateUrl: './export-excel-file.component.html',
  styleUrls: ['./export-excel-file.component.css']
})
export class ExportExcelFileComponent implements OnInit {

  listOfData : any;
  constructor() {
    this.listOfData = [];
  }

  ngOnInit(): void {
    this.loadPage();
  }

  loadPage()
  {
    this.listOfData = this.generateData();
  }

  generateData()
  {
    var userList = [

      {

      "id": 1,

      "FullName": "Adam Brahams",

      "Code": "Abra",

      "email": "adam@Abra.net"

      },

      {

        "id": 1,

        "FullName": "Queeny Smith",

        "Code": "Ms.Queen",

        "email": "Queen@mail.biz"

      },

      {

        "id": 1,

        "FullName": "James Libra",

        "Code": "JLibra",

        "email": "JLibra@april.biz"

      },

      {

        "id": 1,

        "FullName": "Leanne Graham",

        "Code": "Bret",

        "email": "Graham@april.biz"

      },

      {

        "id": 1,

        "FullName": "Joy Paul",

        "Code": "JPGirl",

        "email": "JPGirl@mail.biz"

      }

      ]

      return userList;
  }

  exportexcel()
  {
     /* pass here the table id */
     let element = document.getElementById('excel-table');
     const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

     /* generate workbook and add the worksheet */
     const wb: XLSX.WorkBook = XLSX.utils.book_new();
     XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

     /* save to file */
     XLSX.writeFile(wb, "sample.xlsx");
  }
}


