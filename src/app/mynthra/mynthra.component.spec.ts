import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MynthraComponent } from './mynthra.component';

describe('MynthraComponent', () => {
  let component: MynthraComponent;
  let fixture: ComponentFixture<MynthraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MynthraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MynthraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
