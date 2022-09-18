import { Component, OnInit } from '@angular/core';
import { Todos } from '../todos';
import { TodoService } from '../todo.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css'],
})
export class CreateTodoComponent implements OnInit {
  todo: Todos = new Todos();

  constructor(private todosService: TodoService, private router: Router) {}

  ngOnInit(): void {}

  saveTodo() {
    this.todosService.createTodo(this.todo).subscribe(
      (data) => {
        console.log(data);
        this.gotoTodo();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  gotoTodo() {
    this.router.navigate(['/todos']);
  }

  addTodo() {
    console.log('====================================');
    console.log(this.todo);
    console.log('====================================');

    this.saveTodo();
  }
}
