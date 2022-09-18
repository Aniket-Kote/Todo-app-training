import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompletedTodosComponent } from './completed-todos/completed-todos.component';
import { CreateTodoComponent } from './create-todo/create-todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { UpdateTodoComponent } from './update-todo/update-todo.component';
import { ViewTodoComponent } from './view-todo/view-todo.component';

const routes: Routes = [
  {path:'todos',component:TodoListComponent},
  {path:'add-todo',component:CreateTodoComponent},
  {path:'complete-todo',component:CompletedTodosComponent},
  {path:'update-todo/:todo_id',component:UpdateTodoComponent},
  {path:'view-todo/:todo_id',component:ViewTodoComponent},
  {path:"",redirectTo:'todos',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
