import React from 'react';
import ReactDOM from 'react-dom';
import './myStyle.scss';
//import Link from './Link';
import { todos } from './app.reducer';
import { createStore, combineReducers } from 'redux';
import { Provider, connect } from 'react-redux';

let id = 0;
const reducers = combineReducers({ todos });

/*class App extends React.Component {
  state = {
    CaptainKirkBio: {},
    Foo: null, // Foo is out component
  };

  componentDidMount() {
    this.onGetKirkBio();
    import('./Foo').then(Foo => {
      this.setState({ Foo: Foo.default });
    });
  }

  onGetKirkBio =  () => {
    try {
      const result =  fetch('http://stapi.co/api/v1/rest/character/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: {
          title: 'James T. Kirk',
          name: 'James T. Kirk',
        },
      }).then((result)=>{
        return result.json()
      }).then((resultJSON)=>{
        const character = resultJSON.characters[0];
        this.setState({ CaptainKirkBio: character });

      });
      
    } catch (error) {
      console.log('error', error);
    }
  }; 

  render() {
    const { CaptainKirkBio, Foo } = this.state;
    return (
      <div className="app">
       <Link address="http://www.google.com" />
        <img alt="header" src="/dist/images/header.png" className="app-header" />
        <p>
          We are a most promising species, Mr. Spock, as predators go. Did you know that? I
          frequently have my doubts. I dont. Not any more. And maybe in a thousand years or so will
          be able to prove it.
      </p>
        <p>- Captain Kirk</p>
        <section>
          {Object.values(CaptainKirkBio).length === 0 ? (
            <p>Loading User Information</p>
          ) : (
              <p style={{ wordBreak: 'break-all' }}>{JSON.stringify(CaptainKirkBio)}</p>
            )}
        </section>
        {Foo ? <Foo /> : <p>Foo is loading</p>}
         
      </div>
    );

  }
}*/

let AddInput = ({ handleClick }) => {
  let todoItem;
  return (
    <div>
      <input type="text" ref={input => todoItem = input}></input>
      <button onClick={() => {
        if (todoItem.value) {
          handleClick(todoItem.value);
          todoItem.value = ''
        }

      }} >Add</button>
    </div>
  )

}
const mapInputDispatchToProps = (dispatch) => {
  return {
    handleClick: (todoItem) => dispatch({ type: 'ADD_TODO', payload: { id: id++, text: todoItem } })
  }
}

AddInput = connect(null, mapInputDispatchToProps)(AddInput)

let TodoList = ({ todos, handleRemove }) => (
  <ul>
    {
      todos.map(item => {
        return (<li onClick={() => handleRemove(item.id)} key={item.id}>{item.text}</li>)
      })
    }
  </ul>
)
const mapTodoListStateToProps = ({ todos }) => {
  return { todos }
}

const mapTodoListDispatchToProps = (dispatch) => {
  return {
    handleRemove: (id) => { dispatch({ type: 'REMOVE_TODO', payload: id }) }
  }
}

TodoList = connect(mapTodoListStateToProps, mapTodoListDispatchToProps)(TodoList);


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    }

  }

  render() {
    return (
      <div>
        <AddInput />
        <TodoList />
      </div>

    )
  }

}

ReactDOM.render(
  <Provider store={new createStore(reducers)}>
    <App />
  </Provider>
  , document.getElementById('app'));