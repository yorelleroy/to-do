import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToDo } from './todo-interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToDoService {
  constructor(private http: HttpClient) {}

  url: string = 'http://localhost:9999/';

  getAllTodos(): Observable<any> {
    return this.http.get(this.url + 'getAll');
  }

  updateTodo(toDo: ToDo | undefined): Observable<any> {
    return this.http.post(this.url + 'update', toDo);
  }

  deleteTodo(id: number): Observable<any> {
    return this.http.post(this.url + 'delete', { id: id });
  }
}
