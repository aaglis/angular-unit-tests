import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskListService } from '../../services/task-list.service';
import { Subscription } from 'rxjs';

interface Task {
  name: string
}

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {
  tarefa: string = '';
  listaTarefas: Task[] = [];
  constructor(private tasksListService: TaskListService) {
    this.tasksListService.getTasks.subscribe({
      next: (tasks) => {
        console.log('chamou')
        console.log(tasks, 'tasks')
        this.listaTarefas = tasks;
      },
      error: (err) => {
        console.error(err)
      },
      complete: () => {
        console.log('complete')
      }
    })
  }

  enviarTarefa() {
    this.tasksListService.addTask({ name: this.tarefa });
    console.log(this.listaTarefas)
    this.tarefa = '';
  }
}
