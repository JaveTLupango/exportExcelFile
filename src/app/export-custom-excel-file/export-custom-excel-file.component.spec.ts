import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportCustomExcelFileComponent } from './export-custom-excel-file.component';

describe('ExportCustomExcelFileComponent', () => {
  let component: ExportCustomExcelFileComponent;
  let fixture: ComponentFixture<ExportCustomExcelFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportCustomExcelFileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportCustomExcelFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
