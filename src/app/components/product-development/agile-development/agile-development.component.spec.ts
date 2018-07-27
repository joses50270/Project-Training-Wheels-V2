import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgileDevelopmentComponent } from './agile-development.component';

describe('AgileDevelopmentComponent', () => {
  let component: AgileDevelopmentComponent;
  let fixture: ComponentFixture<AgileDevelopmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgileDevelopmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgileDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
