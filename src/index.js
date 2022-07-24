import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './components/app-header';
import TodoList from './components/todo-list';
import SearchPanel from './components/search-panel';
import ItemStatusFilter from './components/item-status-filter';

export default class App extends Component {
  state={
  todoData:[
      {label: 'drink coffee', important: false, id:1},
      {label: 'drink voda', important: true, id:2},
      {label: 'drink juice', important: false, id:3}
      ]
  };

deleteItem =(id)=>{
this.setState(({todoData})=>{
const idx= todoData.findIndex((el)=>el.id===id);
todoData.splice(idx,1);

const before = todoData.slice(0, idx);
const after = todoData.slice(idx+1);
const newArray= [ ...before, ...after];

return {
  todoData: newArray
};

});
};

  render (){
    return (
      <div>
      <AppHeader/>
      <SearchPanel/>
      <ItemStatusFilter/>
      <TodoList 
      todos={this.state.todoData}
      onDeleted={this.deleteItem}/>
      </div>
    )
  }

}




ReactDOM.render(<App/>, document.getElementById('root'));