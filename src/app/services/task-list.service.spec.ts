import { TestBed } from '@angular/core/testing';

import { TaskListService } from './task-list.service';

describe('TaskListService', () => {
  let service: TaskListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('adicionar uma task', () => {
    const task = { name: 'Teste' };
    service.addTask(task);
    const tasks = service.getTasks.subscribe({
      next: (tasks) => {
        expect(tasks).toContain(task);
      }
    });
  })

  it('remover uma task', () => {
    const task = { name: 'Teste' };
    service.addTask(task);
    service.removeTask(task);
    expect(service.getTasks).not.toContain(task);
  })
});
