import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TaskInterface } from '../types/task.interface';

@Injectable()
export class TasksService {
  tasks$ = new BehaviorSubject<TaskInterface[]>([]);

  addTask(text: string): void {
    const newTask: TaskInterface = {
      id: Math.random().toString(12),
      text,
      isCompleted: false,
    };
    const updatedTasks = [...this.tasks$.getValue(), newTask];
    this.tasks$.next(updatedTasks);
  }
}
