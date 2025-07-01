import React, { useState } from 'react'
import { useTodoContext } from '../context/TodoContext'
import { Form, Input, Button } from '../styles'

const TodoForm = () => {
    const [text, setText] = useState("");
    const {dispatch} = useTodoContext();

    const handleSubmit = (e) => {
      e.preventDefault();
      if(text.trim()){
        dispatch({
          type : "ADD_TODO",
          payload : {
            id : Date.now(),
            text,
            completed : false
          } 
        })
        setText("");
      }
    }
  return (
    <div>
        <Form onSubmit={handleSubmit}>
            <Input 
              type="text"
              value={text}
              placeholder='Enter todo'
              onChange={(e) => setText(e.target.value)}
            />
            <Button type='submit'>Add</Button>
        </Form>
    </div>
  )
}

export default TodoForm