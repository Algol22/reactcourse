import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './components/app-header';
import TodoList from './components/todo-list';
import SearchPanel from './components/search-panel';

const App = () => {

const todoData=[
{label: 'drink coffee', important: false},
{label: 'drink voda', important: true},
{label: 'drink juice', important: false}
];

  return (
    <div>
    <AppHeader/>
    <SearchPanel/>
    <TodoList todos={todoData}/>
    </div>
  )
}




ReactDOM.render(<App/>, document.getElementById('root'));