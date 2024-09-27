import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListComponent } from './todo-list.component';
import { TaskListService } from '../../services/task-list.service';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoListComponent],
      providers: [
        { provide: TaskListService, useClass: TaskListService }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('mostrar o valor do input após preencher o input, clicando no butao', () => {
    component.tarefa = 'Teste';
    component.enviarTarefa();
    expect(component.listaTarefas).toContain({ name: 'Teste' });
  })
});
