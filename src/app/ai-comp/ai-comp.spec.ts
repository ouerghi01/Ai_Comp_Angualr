import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiComp } from './ai-comp';

describe('AiComp', () => {
  let component: AiComp;
  let fixture: ComponentFixture<AiComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiComp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiComp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
