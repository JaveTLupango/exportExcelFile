import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportExcelFileCustomComponent } from './export-excel-file-custom.component';

describe('ExportExcelFileCustomComponent', () => {
  let component: ExportExcelFileCustomComponent;
  let fixture: ComponentFixture<ExportExcelFileCustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportExcelFileCustomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportExcelFileCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
