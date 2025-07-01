import React from 'react'
import { FilterButton, FilterContainer, List } from '../styles'
import TodoItem from './TodoItem'
import { useTodoContext } from '../context/TodoContext'

const TodoList = () => {
    const {state, dispatch} = useTodoContext();

    const filteredTodos = state.todos.filter(todo => {
        if(state.filter === 'pending'){
            return !todo.completed
        }else if(state.filter === 'completed'){
            return todo.completed
        }else{
            return true;
        }
    })
  return (
    <>
        <FilterContainer>
            <FilterButton onClick={() => dispatchEvent({type : "SET_FILTER", payload : "all"})} > All </FilterButton>
            <FilterButton onClick={() => dispatch({type : "SET_FILTER", payload : "pending"})}> Active </FilterButton>
            <FilterButton onClick={() => dispatch({type: "SET_FILTER", payload : "completed"})}> Completed </FilterButton>
        </FilterContainer>

        <List>
            {
                filteredTodos.map((todo) => {
                    <TodoItem key={todo.id} todo={todo} />  
                })
            }
        </List>
    </>
  )
}

export default TodoList