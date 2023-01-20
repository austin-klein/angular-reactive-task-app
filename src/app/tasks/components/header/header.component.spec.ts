import { EventEmitter, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { TasksService } from '../../services/tasks.service';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let mockTasksService: TasksService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      providers: [TasksService],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    mockTasksService = TestBed.inject(TasksService);
    spyOn(mockTasksService, 'addTask').and.returnValue();
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('text should be null', () => {
    expect(component.text).toEqual('');
  });
  it('text should be what is typed into input', () => {
    const input = fixture.debugElement.query(By.css('input'));
    expect(input.nativeElement.value).toBe('');

    // dispatch correct event
    const event = new KeyboardEvent('keyup', {
      bubbles: true,
      cancelable: true,
      shiftKey: false,
    });

    input.nativeElement.value = 'test';
    input.nativeElement.dispatchEvent(event);
    expect(component.text).toBe('test');
  });
  it('should call addTask function when enter is pressed', () => {
    const input = fixture.debugElement.query(By.css('input'));
    const addTaskSpy = spyOn(component, 'addTask');
    // dispatch correct event
    const event = new KeyboardEvent('keyup', {
      bubbles: true,
      cancelable: true,
      shiftKey: false,
      key: 'Enter',
    });

    input.nativeElement.dispatchEvent(event);
    expect(addTaskSpy.calls.count()).toEqual(1);
  });

  it('text resets to empty after addTask is called', () => {
    const input = fixture.debugElement.query(By.css('input'));
    const event = new KeyboardEvent('keyup', {
      bubbles: true,
      cancelable: true,
      shiftKey: false,
    });
    const eventAdd = new KeyboardEvent('keyup', {
      bubbles: true,
      cancelable: true,
      shiftKey: false,
      key: 'Enter',
    });

    input.nativeElement.value = 'test';
    input.nativeElement.dispatchEvent(event);
    input.nativeElement.dispatchEvent(eventAdd);

    expect(component.text).toEqual('');
  });
});
