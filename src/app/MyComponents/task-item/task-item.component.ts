import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import { TaskStructure } from '../../TaskInterface';
import { faTimes } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input() task!: TaskStructure
  @Output() onDeleteTask : EventEmitter<Task> = new EventEmitter()
  @Output() onToggleReminder : EventEmitter<Task> = new EventEmitter()
  faTimes = faTimes;
  
  constructor() { }

  ngOnInit(): void {
  }

  onDelete(task: any) {
    this.onDeleteTask.emit(task);
  }

  onToggle(task: any) {
    this.onToggleReminder.emit(task);
  }

  }


