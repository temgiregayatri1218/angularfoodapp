import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicebillComponent } from './invoicebill.component';

describe('InvoicebillComponent', () => {
  let component: InvoicebillComponent;
  let fixture: ComponentFixture<InvoicebillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoicebillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvoicebillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
