import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YouthDevelopmentComponent } from './youth-development.component';

describe('YouthDevelopmentComponent', () => {
  let component: YouthDevelopmentComponent;
  let fixture: ComponentFixture<YouthDevelopmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YouthDevelopmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YouthDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
