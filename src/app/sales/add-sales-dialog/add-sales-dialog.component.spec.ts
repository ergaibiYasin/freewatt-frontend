import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSalesDialogComponent } from './add-sales-dialog.component';

describe('AddSalesDialogComponent', () => {
  let component: AddSalesDialogComponent;
  let fixture: ComponentFixture<AddSalesDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSalesDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSalesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
