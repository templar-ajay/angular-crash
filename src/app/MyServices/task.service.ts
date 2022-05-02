import { Injectable } from '@angular/core';
import {HttpClient , HttpHeaders} from '@angular/common/http'
import {Observable } from 'rxjs'
import { TaskStructure } from '../TaskInterface';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = 'http://localhost:5000/tasks'

  constructor(private http:HttpClient) { }

  getTasks(): Observable<TaskStructure[]> {
    return this.http.get<TaskStructure[]>(this.apiUrl)
  }

  deleteTask(task:TaskStructure): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`
    return this.http.delete<Task>(url);
  }

  updateTaskReminder(task : TaskStructure): Observable<TaskStructure> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<TaskStructure>(url, task, httpOptions);
  }

  addTask(task: TaskStructure):Observable<TaskStructure>{
    return this.http.post<TaskStructure>(this.apiUrl, task, httpOptions);
  }
}
