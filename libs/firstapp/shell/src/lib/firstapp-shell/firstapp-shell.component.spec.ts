import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstappShellComponent } from './firstapp-shell.component';

describe('FirstappShellComponent', () => {
  let component: FirstappShellComponent;
  let fixture: ComponentFixture<FirstappShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstappShellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstappShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
