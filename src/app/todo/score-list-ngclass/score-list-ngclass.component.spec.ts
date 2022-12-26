import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreListNgclassComponent } from './score-list-ngclass.component';

describe('ScoreListNgclassComponent', () => {
  let component: ScoreListNgclassComponent;
  let fixture: ComponentFixture<ScoreListNgclassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoreListNgclassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScoreListNgclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
