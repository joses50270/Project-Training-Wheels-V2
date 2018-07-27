import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechCurriculumComponent } from './tech-curriculum.component';

describe('TechCurriculumComponent', () => {
  let component: TechCurriculumComponent;
  let fixture: ComponentFixture<TechCurriculumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechCurriculumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechCurriculumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
