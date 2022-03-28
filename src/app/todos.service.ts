
import { Todo } from "./models/todo";



let todos: Todo[] = [];


export function get(): Promise<Todo[]> {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(todos);
    },2000);
  });
}


export function aggTask(todo: Omit<Todo, 'id'>): Promise<Todo> {
  return new Promise((res, rej) =>{
    setTimeout(() => {
      const newTodo: Todo = {...todo,id:todos.length +1};
      todos.push(newTodo)
      res(newTodo);
    },2000);
  });
}


export function rimuoviTas(todo: Todo): Promise<number> {
  return new Promise((res,rej) =>{
    setTimeout(() =>{
      todos= todos.filter((todo)=> todo.id !==todo.id);
      res(todo.id);
    },2000);
  });
}




