import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFournisseurDialogComponent } from './add-fournisseur-dialog.component';

describe('AddFournisseurDialogComponent', () => {
  let component: AddFournisseurDialogComponent;
  let fixture: ComponentFixture<AddFournisseurDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFournisseurDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFournisseurDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
