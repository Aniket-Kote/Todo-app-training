import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from '../todo.service';
import { Todos } from '../todos';

@Component({
  selector: 'app-update-todo',
  templateUrl: './update-todo.component.html',
  styleUrls: ['./update-todo.component.css'],
})
export class UpdateTodoComponent implements OnInit {
  todo: Todos = new Todos(); 
 todo_id!: number;
  constructor(private todoService: TodoService, private route:ActivatedRoute,private router:Router) {}

  ngOnInit(): void {
    this.todo_id = this.route.snapshot.params['todo_id'];
    this.todoService.getToDoById(this.todo_id).subscribe(data=>{
      this.todo=data;
    },error=>{
      console.log(error);
      
    })
  }

  onSubmit(){
    console.log(this.todo);
    this.todoService.updateTodo(this.todo_id,this.todo).subscribe(data=>{
      this.gotoTodo();
      
      
    },error=>{
      console.log(error);
      
    });
    
  }

  gotoTodo(){
    this.router.navigate(['/todos']);
  }
}
