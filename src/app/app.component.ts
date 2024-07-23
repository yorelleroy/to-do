import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ToDo } from './todo-interface';
import { animate, style, transition, trigger } from '@angular/animations';
import { ToDoService } from './to-do-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',

  animations: [
    trigger('listAnimation', [
      transition(':enter', [
        style({ opacity: 0, height: 'auto' }),
        animate(200),
      ]),
    ]),
  ],
})
export class AppComponent implements OnInit {
  constructor(private service: ToDoService) {}
  newTodo: string = '';

  toDos: ToDo[] = [];

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos(): void {
    this.service.getAllTodos().subscribe((result) => {
      this.toDos = result;
    });
  }

  addTask() {
    if (this.newTodo) {
      const newTask: ToDo = {
        id: Math.random(),
        toDo: this.newTodo,
        isCompleted: false,
      };

      this.toDos.push(newTask);
      this.newTodo = '';
    }
  }

  handleClick(id: number) {
    const toDo: ToDo | undefined = this.toDos.find((toDo) => toDo.id === id);

    this.service.updateTodo(toDo).subscribe(() => {
      console.log(toDo);
    });
  }

  handleDelete(id: number) {
    this.service.deleteTodo(id).subscribe(() => {
      this.toDos = this.toDos.filter((toDo) => toDo.id !== id);
    });
  }
}
