import { Injectable } from '@angular/core';
import {Observable , of} from 'rxjs'
import { TaskStructure } from '../TaskInterface';
import {TASKS} from '../mock-tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTasks(): Observable<TaskStructure[]> {
    const tasks = of(TASKS);
    return tasks;
  }
}
