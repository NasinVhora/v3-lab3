export class Todo {
  id: number;
  text: string;
  completed: boolean;
  listBEnable: boolean;

  constructor(id: number, text: string, completed: boolean, listBEnable: boolean) {
    this.id = id;
    this.text = text;
    this.completed = completed;
    this.listBEnable= listBEnable;
  }
}
