import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo';
import * as todoService from '../todos.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']

})



export class TodoComponent implements OnInit {

  tasks!: Todo[]
  titolo!: string


  constructor() {

    todoService.get().then(todos => (this.tasks = todos.filter((todo) => !todo.completed)));
  }


  ngOnInit(): void { }

  async aggTask() {
    const nTodo = await todoService.aggTask({ title: this.titolo as string, completed: false });
    this.tasks.push(nTodo);
    this.titolo = '';
  }


}














