import { ServiceService } from './../services/service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todoform',
  templateUrl: './todoform.component.html',
  styleUrls: ['./todoform.component.scss']
})
export class TodoformComponent implements OnInit {
  todoInput =""
  constructor(private services:ServiceService){}
  ngOnInit(): void {
    
  }
  addTask() {
    this.services.addTodo(this.todoInput)
    this.todoInput = ""
  }
  restform(){
    this.todoInput=""
  }
}
