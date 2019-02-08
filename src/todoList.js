import React from 'react';
import {  connect } from 'react-redux';


export const TodoList = ({ todos, handleRemove }) => (
    <div>
      {
        todos.map(item => {
          return (<div><a href="#" className="item" onClick={() => handleRemove(item.id)} key={item.id}>{item.text}</a></div>)
        })
      }
    </div>
  )
  const mapTodoListStateToProps = ({ todos }) => {
    return { todos }
  }
  
  const mapTodoListDispatchToProps = (dispatch) => {
    return {
      handleRemove: (id) => { dispatch({ type: 'REMOVE_TODO', payload: id }) }
    }
  }
  
  export const TodoListContainer = connect(mapTodoListStateToProps, mapTodoListDispatchToProps)(TodoList);

  
  