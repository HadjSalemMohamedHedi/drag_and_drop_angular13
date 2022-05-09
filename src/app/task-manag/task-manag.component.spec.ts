import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskManagComponent } from './task-manag.component';

describe('TaskManagComponent', () => {
  let component: TaskManagComponent;
  let fixture: ComponentFixture<TaskManagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskManagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskManagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
