import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequiredText } from './required-text.component';

describe('RequiredText', () => {
  let component: RequiredText;
  let fixture: ComponentFixture<RequiredText>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequiredText ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequiredText);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
