import React from 'react'
import { useTodoContext } from '../context/TodoContext'
import { Checkbox, DeleteButton, ListItem, Text } from '../styles';

// we get todo from TodoList <TodoItem key={todo.id} todo={todo} />
const TodoItem = ({todo}) => {
  const {dispatch} = useTodoContext();
  const toggleTodo = () => {
    dispatch({
      type : "TOGGLE_TODO",
      payload : todo.id
    })
  }

  const deleteTodo = ({todo}) => {
    dispatch({
      type : "DELETE_TODO",
      payload : todo.id
    })
  }
  return (
    <ListItem>
      <Checkbox
        type="checkbox"
        checked={todo.completed}
        onClick={toggleTodo}
      />
      <Text completed={todo.completed}>{todo.text}</Text>
      <DeleteButton onClick={deleteTodo}>Delete</DeleteButton>
    </ListItem>
  )
}

export default TodoItem