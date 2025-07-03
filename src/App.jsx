import React, { useEffect } from 'react'
import { Container, Header } from './styles'
import { TodoProvider, useTodoContext } from './context/TodoContext'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import useLocalStorage from './hooks/useLocalStorage'

const App = () => {
  const { state, dispatch } = useTodoContext();
  const [storeData, setStoreData] = useLocalStorage('todos', []);

  useEffect(() => {
    dispatch({
      type: "LOAD_TODOS",
      payload: storeData
    })
  }, [])

  useEffect(() => {
    setStoreData(state.todos)
  }, [state.todos])
  return (

    <Container>
      <Header>TODO APP</Header>
      <TodoForm />
      <TodoList />
    </Container>
  )
}




export default App