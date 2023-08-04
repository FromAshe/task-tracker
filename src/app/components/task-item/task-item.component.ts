import { Component, Input, Output, EventEmitter } from '@angular/core';
import {TASK} from "../../TASK";
import {faTimes} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  @Input()task!: TASK;
  @Output()onDeleteTask: EventEmitter<TASK> = new EventEmitter<TASK>();
  @Output()onToggleReminder: EventEmitter<TASK> = new EventEmitter<TASK>();
  faTimes = faTimes;

  onDelete(task:TASK):void {
    this.onDeleteTask.emit(task);
  }

  onToggle(task: TASK):void{
    this.onToggleReminder.emit(task);
  }
}
