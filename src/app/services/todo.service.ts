import { Injectable } from '@angular/core';
import { Todo } from '../classes/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todosA: Todo[];
  private todosB: Todo[];
  private nextId: number;

  constructor() {
    this.todosA = [
      new Todo(0, "Angular todolist demo1", false, false),
      //new Todo(1, "Fold the laundry."),
      //new Todo(2, "Learn to make a React app!")
    ];

    //this.nextId = 3;
    this.nextId = 1;

    this.todosB = [];
  }

  public addTodo(text: string): void {
    //console.log(this.todos);
    let todo = new Todo(this.nextId, text, false, false);
    this.todosA.push(todo);
    this.nextId++;
  }

  public getTodosA(): Todo[] {
    return this.todosA;
  }

  public getTodosB(): Todo[] {
    return this.todosB;
  }

  public removeTodo(id: number): void {
    this.todosB = this.todosB.filter((todo)=> todo.id != id);
  }
  
  public completeTodo(todo: Todo): void {
    todo.completed = true;
    this.todosA = this.todosA.filter((obj)=> obj.id != todo.id);
    this.todosB.push(todo);
  }

  public undoTodo(todo: Todo): void {
    todo.completed = false;
    this.todosB = this.todosB.filter((obj)=> obj.id != todo.id);
    this.todosA.push(todo);
  }

  public listBEnable(todo: Todo): void {
    todo.listBEnable = true;    
  }

}
