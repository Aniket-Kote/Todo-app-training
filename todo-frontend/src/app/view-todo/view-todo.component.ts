import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from '../todo.service';
import { Todos } from '../todos';

@Component({
  selector: 'app-view-todo',
  templateUrl: './view-todo.component.html',
  styleUrls: ['./view-todo.component.css'],
})
export class ViewTodoComponent implements OnInit {
  todo_id!: number;
  
  todo!: Todos;
  todos: Todos[] | undefined;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private todoService: TodoService
  ) {}







  ngOnInit(): void {
    this.todo_id = this.route.snapshot.params['todo_id'];

    this.todo = new Todos();

    
    this.todoService.getToDoById(this.todo_id).subscribe(
      (data) => {
        this.todo = data;
       
      },
      (error) => {
        console.log(error);
      }

     
    );
  }


  private getTodosList() {
    this.todoService.getTodosList(0).subscribe((data) => {
     
      this.todos = data;
    });
  }

  deleteTodo(todo_id: number) {
    this.todoService.deleteTodo(todo_id).subscribe((data) =>{
      console.log(data);
      this.router.navigate(['todos']);
      this.getTodosList();
    })
  }


 
}
