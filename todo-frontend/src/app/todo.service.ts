import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todos } from './todos';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  static getTodos(getTodos: any) {
    throw new Error('Method not implemented.');
  }
  private baseUrl = 'http://localhost:8080/api/v1/todos';

  constructor(private httpClient: HttpClient) {}

  getTodosList(todo_id: number): Observable<Todos[]> {
    return this.httpClient.get<Todos[]>(`${this.baseUrl}/done/${todo_id}`);
  }
  createTodo(todo: Todos): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}`, todo);
  }

  getToDoById(todo_id: number): Observable<Todos> {
    return this.httpClient.get<Todos>(`${this.baseUrl}/${todo_id}`);
  }

  updateTodo(todo_id:number,todo:Todos):Observable<Object>{
    console.log(todo);
    
  return this.httpClient.put(`${this.baseUrl}/${todo_id}`,todo)
  }

  deleteTodo(todo_id: number):Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/${todo_id}`);
  }

  doneTodo(todo_id:number,todo:Todos):Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/done/${todo_id}`,todo);
  }
}
