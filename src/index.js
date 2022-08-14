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
    this.createTodoItem('drijk coffem'),
    this.createTodoItem('drijk coffem2'),
    this.createTodoItem('drijk coffem3'),
      
      ],
      term: '',
      filter: 'all'
  };

createTodoItem(label){
  return {
    label,
    important: false,
    done:false,
    id: this.maxId++
  };
}


  onToggleImportant=(id)=>{
    this.setState(({todoData})=>{
      return{
        todoData: this.toggleProperty(todoData, id, 'important')
      };
      
        });
  };

onToggleDone=(id)=>{

  this.setState(({todoData})=>{
    

return{
  todoData: this.toggleProperty(todoData, id, 'done')
};

  });

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
const newItem= this.createTodoItem(text);

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


toggleProperty(arr, id, propName){
  const idx= arr.findIndex((el)=>el.id===id);
    const oldItem = arr[idx];
    const newItem = {...oldItem, [propName]:!oldItem[propName]};

    const before = arr.slice(0, idx);
const after = arr.slice(idx+1);
const newArray= [...before, newItem, ...after];

return newArray;
}


search(items, term){
if(term.length===0){
  return items;
}
 return items.filter((item)=>{
    return item.label
    .toLowerCase()
    .indexOf(term.toLowerCase()) > -1;
  });
}


filter(items, filter){
switch(filter){
  case 'all':
    return items;
    case 'active':
    return items.filter((item)=>!item.done);
    case 'done':
      return items.filter((item)=>item.done);
      default: 
      return items;
}

}


onSearchChange=(term)=>{
  this.setState({term});
}

onFilterChange=(filter)=>{
  this.setState({filter});
}


  render (){

    const {todoData, term, filter } = this.state;

    const visibleItems  = this.filter(this.search(todoData, term), filter);
    const doneCount = todoData
                      .filter((el)=>el.done).length;
    const todoCount = todoData.length - doneCount;

    return (
  
        <div className='todo-app'>
      <AppHeader toDo={todoCount} done={doneCount}/>
      <div className='top-panel d-flex'>
      <SearchPanel onSearchChange={this.onSearchChange}/>
      <ItemStatusFilter filter={filter}
      onFilterChange={this.onFilterChange}/>
      </div>


      <TodoList 
      todos={visibleItems}
      onDeleted={this.deleteItem}
      onToggleImportant={this.onToggleImportant}
      onToggleDone={this.onToggleDone}/>
      <ItemAddForm onItemAdded={this.addItem}/>
      </div>
    )
  }

}




ReactDOM.render(<App/>, document.getElementById('root'));