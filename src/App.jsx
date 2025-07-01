import React from 'react'
import { Container, Header } from './styles'
import { TodoProvider } from './context/TodoContext'
import TodoForm from './components/TodoForm'

const App = () => {
  return (
    <TodoProvider>
        <Container>
            <Header>TODO APP</Header>
            <TodoForm />
        </Container>
    </TodoProvider>
  )
}




export default App