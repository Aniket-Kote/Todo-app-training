import {
  Component,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from '../todo.service';
import { Todos } from '../todos';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todos: Todos[] | undefined;
  todo: Todos = new Todos();

  constructor(private todoService: TodoService, private router: Router) {}

  ngOnInit(): void {
    this.getTodosList();
  }
  msg: string | undefined;
  errorMsg: any;

  totalLength: any;
  page: number = 1;

  

  private getTodosList() {
    this.todoService.getTodosList(0).subscribe((data) => {
      this.todos = data;

      this.totalLength = data.length;
      console.log('====================================');
      console.log(this.totalLength);
      console.log('====================================');
      if (this.todos.length == 0) {
        this.errorMsg = 'No Todo Available';
      }
    });
  }

  updateTodo(todo_id: number) {
    this.router.navigate(['update-todo', todo_id]);
  }

  deleteTodo(todo_id: number) {
    this.todoService.deleteTodo(todo_id).subscribe((data) => {
      this.getTodosList();
    });
  }

  viewTodo(todo_id: number) {
    this.router.navigate(['view-todo', todo_id]);
  }

  todoDone(todo_id: number) {
    this.todoService.doneTodo(todo_id, this.todo).subscribe((data) => {
      this.getTodosList();
    });
    console.log(todo_id);
  }

  SearchText: any;
  // @ViewChild('tasks') tasks: ElementRef | undefined;
  // searchTodo()
  // {

  //   var filter=this.SearchText.toUpperCase();
  //    var todoData=document.getElementById('todoData')
  // var tr= todoData.getElementsByClassName('tasks');

  //  console.log('====================================');
  //  console.log(this.tasks?.nativeElement.innerHTML);
  //  console.log('====================================');

  // }
  show() {
    alert('cleared');
  }
}
