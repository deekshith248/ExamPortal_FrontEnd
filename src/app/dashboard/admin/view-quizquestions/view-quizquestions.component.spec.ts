import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewQuizquestionsComponent } from './view-quizquestions.component';

describe('ViewQuizquestionsComponent', () => {
  let component: ViewQuizquestionsComponent;
  let fixture: ComponentFixture<ViewQuizquestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewQuizquestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewQuizquestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
