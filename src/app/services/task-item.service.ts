import { Injectable } from '@angular/core';
import {HttpClient, HttpHandler} from "@angular/common/http";
import {Observer} from "rxjs";
import {TASK} from "../TASK";

@Injectable({
  providedIn: 'root'
})
export class TaskItemService {
  private url: string = "http://localhost:5000"
  constructor(private http: HttpClient) { }
}
