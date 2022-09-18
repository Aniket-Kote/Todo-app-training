import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from '../todo.service';
import { Todos } from '../todos';

@Component({
  selector: 'app-completed-todos',
  templateUrl: './completed-todos.component.html',
  styleUrls: ['./completed-todos.component.css']
})
export class CompletedTodosComponent implements OnInit {
  todos: Todos[] | undefined;


  constructor(private todoService: TodoService, private router: Router) { }

  ngOnInit(): void {

    this.getTodosList();
  }

  SearchText: any;
  totalLength: any;
  page: number = 1;

  private getTodosList() {
    this.todoService.getTodosList(1).subscribe((data) => {
      this.todos = data;
    });
  }
  deleteTodo(todo_id: number) {
    this.todoService.deleteTodo(todo_id).subscribe((data) => {
      this.getTodosList();
    });
  }
 
}
