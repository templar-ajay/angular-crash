import { Component, OnInit , Input} from '@angular/core';
import { TaskStructure } from '../../TaskInterface';
import { faTimes } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  faTimes = faTimes;
  @Input() ithTask!: TaskStructure
  
  
  constructor() { }

  ngOnInit(): void {
  }

}
