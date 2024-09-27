import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

interface Task {
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class TaskListService {

  private tasks: Task[] = [];
  private tasks$: Subject<Task[]> = new Subject<Task[]>();

  get getTasks(): Observable<Task[]> {
    return this.tasks$.asObservable()
  }

  addTask(task: Task) {
    this.tasks.push(task);
    this.tasks$.next(this.tasks);
    console.log(this.tasks)
  }

  removeTask(task: Task) {
    this.tasks = this.tasks.filter(t => t !== task);
    this.tasks$.next(this.tasks);
    console.log(this.tasks)
  }


}
