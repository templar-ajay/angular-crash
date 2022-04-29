import { Component, OnInit, } from '@angular/core';
import { TaskService } from '../../MyServices/task.service';
import {TaskStructure} from '../../TaskInterface';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks : TaskStructure[] = [];

  constructor(private taskService : TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks)
  }

}