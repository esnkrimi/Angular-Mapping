import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetTestComponent } from './net-test.component';

describe('NetTestComponent', () => {
  let component: NetTestComponent;
  let fixture: ComponentFixture<NetTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NetTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
