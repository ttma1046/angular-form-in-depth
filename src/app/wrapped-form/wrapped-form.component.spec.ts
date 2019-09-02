import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WrappedFormComponent } from './wrapped-form.component';

describe('WrappedFormComponent', () => {
  let component: WrappedFormComponent;
  let fixture: ComponentFixture<WrappedFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WrappedFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrappedFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
