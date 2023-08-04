import { Component, Input, Output, EventEmitter } from '@angular/core';
import {UiService} from "../../services/ui.service";
import {Subscription} from "rxjs";
import {TASK} from "../../TASK";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  @Output() onAddTask:EventEmitter<TASK> = new EventEmitter<TASK>();
  text: string = "";
  day: string = "";
  reminder: boolean = false;
  showAddTask:boolean = false;
  subscription: Subscription;

  constructor(private uiService: UiService) {
   this.subscription = this.uiService.onToggle().subscribe((value =>
    this.showAddTask = value
    ))
  }

  onSubmit() {
    if(!this.text){
      alert("Please add a task!")
      return
    }
    const newTask: TASK= {
      text:this.text,
      day:this.day,
      reminder:this.reminder
    }

    this.onAddTask.emit(newTask);

    this.text = ''
    this.day = ''
    this.reminder = false

    this.uiService.toggleAddTask();
  }
}
