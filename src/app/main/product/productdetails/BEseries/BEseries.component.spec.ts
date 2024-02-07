/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BEseriesComponent } from './BEseries.component';

describe('BEseriesComponent', () => {
  let component: BEseriesComponent;
  let fixture: ComponentFixture<BEseriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BEseriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BEseriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
