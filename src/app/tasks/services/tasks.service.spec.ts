import { TasksService } from './tasks.service';

describe('TasksService', () => {
  let service: TasksService;

  beforeEach(() => {
    service = new TasksService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('tasks should start as an empty array', () => {
    expect(service.tasks$.getValue()).toEqual([]);
  });

  it('task added correctly', () => {
    service.addTask('new task');
    service.tasks$.subscribe((value) => {
      expect(value.length).toEqual(1);
      expect(service.tasks$.getValue()[0].text).toEqual('new task');
    });
  });
});
