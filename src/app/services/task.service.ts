import { Injectable } from '@angular/core';
import {HttpClient, HttpHandler} from "@angular/common/http";
import {TASK} from "../TASK";
import {Observable} from "rxjs"

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  url:string = "http://localhost:5000/tasks";
  constructor(private http: HttpClient) { }

  getTasks(): Observable<TASK[]>{
    return this.http.get<TASK[]>(this.url);
}
  deleteTask(task: TASK): Observable<TASK>{
    const url = `${this.url}/${task.id}`;
    return this.http.delete<TASK>(url);
  }

  updateReminder(task: TASK): Observable<TASK>{
    const url = `${this.url}/${task.id}`;
    return this.http.put<TASK>(url, task);
  }

  addTask(task: TASK): Observable<TASK>{
    return this.http.post<TASK>(this.url, task);
  }
}
