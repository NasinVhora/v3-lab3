import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../../classes/todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  
  @Input()
  private todo: Todo;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  private removeTodo(): void {
    this.todoService.removeTodo(this.todo.id);
  }

  private completeTodo(): void {
    this.todoService.completeTodo(this.todo);
  }

  private undoTodo(): void {
    this.todoService.undoTodo(this.todo);
  }

  private listBEnable(): void {
    this.todoService.listBEnable(this.todo);
  }

}
