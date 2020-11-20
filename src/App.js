import React, { Component } from 'react';
import Options from './components/Options';
import CountsContainer from './containers/CountsContainer';
import TodoListContainer from './containers/TodoListContainer';


class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="todos">
          <div className="todos__header">
            <h3 className="todos__header-text">Todo List</h3>
          </div>
          <Options />
          <TodoListContainer />
          <CountsContainer />
        </div>
      </div>
    );
  }
}

export default App;