import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { saveAs  } from 'file-saver';
import { Workbook } from 'exceljs/dist/exceljs.min.js'


@Component({
  selector: 'app-export-custom-excel-file',
  templateUrl: './export-custom-excel-file.component.html',
  styleUrls: ['./export-custom-excel-file.component.css']
})
export class ExportCustomExcelFileComponent implements OnInit {

  listOfMonth:any;
  constructor() {
    this.listOfMonth = [];
  }

  ngOnInit(): void {
    this.listOfMonth = this.ListOfMonth();
  }

  ListOfMonth()
  { debugger;
       var date: Date = new Date("2021-01-15");
       const datepipe: DatePipe = new DatePipe('en-US')
    var list = []
    for (var i = 1 ; i <= 12; i++ )
    {
       date.setMonth(date.getMonth()+ i);
      list.push(''+datepipe.transform(date, 'MMMM yyyy')+'');
    }

    return list;
  }

  exportexcel()
  { debugger;
    var data = [{'name':'ABC','Value':'100'},
    {'name':'XYZ','Value':'25'},
    {'name':'QWE','Value':'75'}];

    var headerC = ['','','','Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat','Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Fri', 'Sat']
    var RowC = ['Name','ID','email','Sun1', 'Mon1', 'Tue1', 'Wed1', 'Thr1', 'Fri1', 'Sat1','Sun1', 'Mon1', 'Tue1', 'Wed1', 'Thr1', 'Fri1', 'Fri1', 'Sat1']
    var RowS = ['','','','', '', '', '', '', '', '','', '', '', '', '', '', '', '']

    const workBook = new Workbook();
    const workSheet = workBook.addWorksheet('test');
    const row = workSheet.addRow(headerC);

      for ( let i = 1; i <= headerC.length+1; i++) {
        const col = row.getCell(i);
        if(headerC[i-1]== "Sat" || headerC[i-1]== "Sun")
        {
          col.fill = {
            type: 'pattern',
            pattern: 'solid',
            border:"solid black",
            fgColor: {argb: 'FFC000'}
          };
        }
      }
      workSheet.addRow(RowC);
      workSheet.addRow(RowS);

    workBook.xlsx.writeBuffer().then( data => {
      let blob = new Blob([data], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
      });
      saveAs(blob, 'test.xlsx');
    })

  }


}
