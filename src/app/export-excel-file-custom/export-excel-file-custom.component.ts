import { Component, OnInit } from '@angular/core';
import { saveAs  } from 'file-saver';
import { Workbook } from 'exceljs/dist/exceljs.min.js'

@Component({
  selector: 'app-export-excel-file-custom',
  templateUrl: './export-excel-file-custom.component.html',
  styleUrls: ['./export-excel-file-custom.component.css']
})
export class ExportExcelFileCustomComponent implements OnInit {

  header: any;
  Row : any;

  constructor() {
    this.header = ['Name', 'Contact', 'Email']
    this.Row = ['Juan Tamad','09123456789','email@mail.com']
   }

  ngOnInit(): void {
  }

  exportexcel()
  {
    const workBook = new Workbook();
    const workSheet = workBook.addWorksheet('test');
    const row = workSheet.addRow(this.header);
    workSheet.addRow(this.Row);
    workBook.xlsx.writeBuffer().then( data => {
      let blob = new Blob([data], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
      });
      saveAs(blob, 'test.xlsx');
    })
  }

  exportexcel01()
  {
    const workBook = new Workbook();
    const workSheet = workBook.addWorksheet('test');
    const row = workSheet.addRow(this.header);
    for ( let i = 1; i <= this.header.length; i++) {
      const col = row.getCell(i);
        col.fill = {
          type: 'pattern',
          pattern: 'solid',
          border:"solid black",
          fgColor: {argb: 'FFC000'}
        };
    }
    workSheet.addRow(this.Row);
    workBook.xlsx.writeBuffer().then( data => {
      let blob = new Blob([data], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
      });
      saveAs(blob, 'test.xlsx');
    })
  }

  exportexcel02()
  {
    const workBook = new Workbook();
    const workSheet = workBook.addWorksheet('test');
    const row = workSheet.addRow(this.header);
    for ( let i = 1; i <= this.header.length; i++) {
      const col = row.getCell(i);
        col.fill = {
          type: 'pattern',
          pattern: 'solid',
          border:"solid black",
          fgColor: {argb: 'FFC000'}
        };
        col.border = { top: {style:'thin'}, left:{style:'thin'}, bottom: {style:'thin'}, right: {style:'thin'} }
    }

    const row1 = workSheet.addRow(this.Row);
    for ( let i = 1; i <= this.Row.length; i++) {
      const col = row1.getCell(i);
        col.fill = {
          type: 'pattern',
          pattern: 'solid',
          border:"solid black",
          fgColor: {argb: 'FFC000'}
        };
        col.border = { top: {style:'thin'}, left:{style:'thin'}, bottom: {style:'thin'}, right: {style:'thin'} }
    }

    workBook.xlsx.writeBuffer().then( data => {
      let blob = new Blob([data], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
      });
      saveAs(blob, 'test.xlsx');
    })
  }

  exportexcel03()
  {
    const workBook = new Workbook();
    const workSheet = workBook.addWorksheet('test');
    const row = workSheet.addRow(this.header);
    for ( let i = 1; i <= this.header.length; i++) {
      const col = row.getCell(i);
        col.fill = {
          type: 'pattern',
          pattern: 'solid',
          border:"solid black",
          fgColor: {argb: 'FFC000'}
        };
        col.border = { top: {style:'thin'}, left:{style:'thin'}, bottom: {style:'thin'}, right: {style:'thin'} }
        col.alignment = {vertical:'middle', horizontal:'center'}
    }

    const row1 = workSheet.addRow(this.Row);
    for ( let i = 1; i <= this.Row.length; i++) {
      const col = row1.getCell(i);
        col.fill = {
          type: 'pattern',
          pattern: 'solid',
          border:"solid black",
          fgColor: {argb: 'FFC000'}
        };
        col.border = { top: {style:'thin'}, left:{style:'thin'}, bottom: {style:'thin'}, right: {style:'thin'} }
        col.alignment = {vertical:'middle', horizontal:'center'}
    }

    workBook.xlsx.writeBuffer().then( data => {
      let blob = new Blob([data], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
      });
      saveAs(blob, 'test.xlsx');
    })
  }

  exportexcel04()
  {
    const workBook = new Workbook();
    const workSheet = workBook.addWorksheet('test');
    const row = workSheet.addRow(this.header);
    for ( let i = 1; i <= this.header.length; i++) {
      const col = row.getCell(i);
        col.fill = {
          type: 'pattern',
          pattern: 'solid',
          border:"solid black",
          fgColor: {argb: 'FFC000'}
        };
        col.border = { top: {style:'thin'}, left:{style:'thin'}, bottom: {style:'thin'}, right: {style:'thin'} }
        col.alignment = {vertical:'middle', horizontal:'center'}
    }

    const row1 = workSheet.addRow(this.Row);
    for ( let i = 1; i <= this.Row.length; i++) {
      const col = row1.getCell(i);
        col.fill = {
          type: 'pattern',
          pattern: 'solid',
          border:"solid black",
          fgColor: {argb: 'FFC000'}
        };
        col.border = { top: {style:'thin'}, left:{style:'thin'}, bottom: {style:'thin'}, right: {style:'thin'} }
        col.alignment = {vertical:'middle', horizontal:'center'}
    }

    var A1 = workSheet.getCell('A1')
    workSheet.mergeCells('A1:A2');
    A1.value = 'Merge';
    (A1).fill= {
          type: 'pattern',
          pattern: 'solid',
          fgColor: {argb: 'FFC000'}
    };
    (A1).alignment = {vertical:'middle', horizontal:'center'};
    (A1).border = { top: {style:'thin'}, left:{style:'thin'}, bottom: {style:'thin'}, right: {style:'thin'} }


    workBook.xlsx.writeBuffer().then( data => {
      let blob = new Blob([data], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
      });
      saveAs(blob, 'test.xlsx');
    })
  }


  exportexcel05()
  {
    const workBook = new Workbook();
    const workSheet = workBook.addWorksheet('test');
    const row = workSheet.addRow(this.header);
    for ( let i = 1; i <= this.header.length; i++) {
      const col = row.getCell(i);
        col.fill = {
          type: 'pattern',
          pattern: 'solid',
          border:"solid black",
          fgColor: {argb: 'FFC000'}
        };
        col.border = { top: {style:'thin'}, left:{style:'thin'}, bottom: {style:'thin'}, right: {style:'thin'} }
        col.alignment = {vertical:'middle', horizontal:'center'}
    }

    const row1 = workSheet.addRow(this.Row);
    for ( let i = 1; i <= this.Row.length; i++) {
      const col = row1.getCell(i);
        col.fill = {
          type: 'pattern',
          pattern: 'solid',
          border:"solid black",
          fgColor: {argb: 'FFC000'}
        };
        col.border = { top: {style:'thin'}, left:{style:'thin'}, bottom: {style:'thin'}, right: {style:'thin'} }
        col.alignment = {vertical:'middle', horizontal:'center'}
    }

    var A1 = workSheet.getCell('A1')
    workSheet.mergeCells('A1:B1');
    A1.value = 'Merge';
    (A1).fill= {
          type: 'pattern',
          pattern: 'solid',
          fgColor: {argb: 'FFC000'}
    };
    (A1).alignment = {vertical:'middle', horizontal:'center'};
    (A1).border = { top: {style:'thin'}, left:{style:'thin'}, bottom: {style:'thin'}, right: {style:'thin'} }


    workBook.xlsx.writeBuffer().then( data => {
      let blob = new Blob([data], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
      });
      saveAs(blob, 'test.xlsx');
    })
  }

}
