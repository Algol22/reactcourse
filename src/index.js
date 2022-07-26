import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './components/app-header';
import TodoList from './components/todo-list';
import SearchPanel from './components/search-panel';
import ItemStatusFilter from './components/item-status-filter';
import ItemAddForm from './components/item-add-form';

export default class App extends Component {

maxId=100;


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


const before = todoData.slice(0, idx);
const after = todoData.slice(idx+1);
const newArray= [...before, ...after];

return {
  todoData: newArray
};

});
};

addItem=(text)=>{
//
const newItem={
  label:text,
  important: false,
  id: this.maxId++
};

this.setState(({todoData})=> {

const newArr = [
  ...todoData,
  newItem
];

return{
  todoData: newArr
};
})
}

  render (){
    return (
      <div>
      <AppHeader/>
      <SearchPanel/>
      <ItemStatusFilter/>
      <TodoList 
      todos={this.state.todoData}
      onDeleted={this.deleteItem}/>
      <ItemAddForm onItemAdded={this.addItem}/>
      </div>
    )
  }

}




ReactDOM.render(<App/>, document.getElementById('root'));