import React from 'react'
import { TodoItems } from './TodoItems';

export function TodoList({ todos, toggleTodo }) {
  return (
  <ul> 
      {todos.map((todo) => (
          <TodoItems krey={todo.id} todo = {todo} toggleTodo={toggleTodo} />
      ))}
  </ul>
  );
}
