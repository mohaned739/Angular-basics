import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesAssignmentComponent } from './directives-assignment.component';

describe('DirectivesAssignmentComponent', () => {
  let component: DirectivesAssignmentComponent;
  let fixture: ComponentFixture<DirectivesAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectivesAssignmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectivesAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
