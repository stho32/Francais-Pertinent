import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionMotComponent } from './question-mot.component';

describe('QuestionMotComponent', () => {
  let component: QuestionMotComponent;
  let fixture: ComponentFixture<QuestionMotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionMotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionMotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
