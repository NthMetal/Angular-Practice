import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GomoComponent } from './gomo.component';

describe('GomoComponent', () => {
  let component: GomoComponent;
  let fixture: ComponentFixture<GomoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GomoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GomoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
