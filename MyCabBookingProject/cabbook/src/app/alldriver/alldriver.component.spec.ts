import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlldriverComponent } from './alldriver.component';

describe('AlldriverComponent', () => {
  let component: AlldriverComponent;
  let fixture: ComponentFixture<AlldriverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlldriverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlldriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
