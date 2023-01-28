import { ServiceService } from './../services/service.service';
import { Component, OnInit, } from '@angular/core';


@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {
  editIndex: any;
  todos: any;

  constructor(private services: ServiceService) { }

  ngOnInit(): void {
    this.todos = this.services.todoList
  }

  removeTodo(index: any) {
    this.services.deleteTodo(index);
  }

  editTodo(index: any) {
    this.editIndex = index;
  }

  saveTodo(index: any, task: string) {
    this.services.updateTodo(index, task);
    this.editIndex = null;
  }

  cancelEdit() {
    this.editIndex = null;
  }

}
