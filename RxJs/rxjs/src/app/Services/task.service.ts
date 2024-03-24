import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class TaskService {
  CreateTask = new Subject<string>();

  OnCreateTask(value: string) {
    this.CreateTask.next(value);
  }
}
