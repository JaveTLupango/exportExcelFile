import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportExcelFileComponent } from './export-excel-file.component';

describe('ExportExcelFileComponent', () => {
  let component: ExportExcelFileComponent;
  let fixture: ComponentFixture<ExportExcelFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportExcelFileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportExcelFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
