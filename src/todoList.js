import React from 'react';
import { connect } from 'react-redux';


export const TodoList = ({ todos, handleToggle, handleRemove }) => (
  <div>
    {
      todos.map(item => {
        return (
          <div key={item.id}>
            <button onClick={() => { handleRemove(item.id) }}>x</button>
            <span href="#" className={item.isChecked ? 'strike todoItem' : 'todoItem'} onClick={() => handleToggle(item.id)}>{item.text}</span>
          </div>)
      })
    }
  </div>
)



