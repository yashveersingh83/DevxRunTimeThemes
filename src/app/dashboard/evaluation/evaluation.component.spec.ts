import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationComponent } from './evaluation.component';
import { DashboardService } from '../dashboard.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpErrorHandler } from 'src/app/http-error-handler.service';
import { MessageService } from 'src/app/message.service';

describe('EvaluationComponent', () => {
  let component: EvaluationComponent;
  let fixture: ComponentFixture<EvaluationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ EvaluationComponent ],
      providers:[DashboardService,HttpErrorHandler,MessageService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
