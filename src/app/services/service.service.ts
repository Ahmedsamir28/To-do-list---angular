import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  taskId: any = 1;
  todoList:any = [];

  constructor() {}

  addTodo(taskName: any) {
    this.todoList.push({ id: this.taskId++, task: taskName });
  }

  deleteTodo(index: any) {
    this.todoList.splice(index, 1);
  }

  updateTodo(index: any, task: string) {
    this.todoList[index].task = task;
  }
}
