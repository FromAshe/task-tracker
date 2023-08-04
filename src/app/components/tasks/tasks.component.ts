import { Component, OnInit } from '@angular/core';
import {TaskService} from "../../services/task.service";
import {TASK} from "../../TASK";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit{
  tasks:TASK[] = [];
  constructor(private taskService: TaskService) {
  }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks)=>{
      this.tasks = tasks;
    });
  }

  deleteTask(task:TASK):void{
    this.taskService.
    deleteTask(task).
    subscribe(()=>
      this.tasks = this.tasks.
      filter((t)=>
          t.id !== task.id
      )
    );
  }

  toggleReminder(task:TASK):void{
   task.reminder = !task.reminder;
   this.taskService.updateReminder(task).subscribe();
  }

  addTask(task:TASK):void{
    this.taskService.addTask(task).subscribe((t)=>
    this.tasks.push(t)
    )
  }

}
