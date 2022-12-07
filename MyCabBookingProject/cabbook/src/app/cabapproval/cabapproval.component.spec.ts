import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabapprovalComponent } from './cabapproval.component';

describe('CabapprovalComponent', () => {
  let component: CabapprovalComponent;
  let fixture: ComponentFixture<CabapprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabapprovalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CabapprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
