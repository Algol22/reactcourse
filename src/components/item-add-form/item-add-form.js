import React, {Component} from 'react'
import { render } from 'react-dom'
import './item-add-form.css';

export default class itemAddForm extends Component {
  
state={
    label:''
};

 onLabelChange =(e)=>
 {
this.setState({
    label: e.target.value
});

 }

 onSubmit =(e)=>{
    e.preventDefault();
this.props.onItemAdded(this.state.label);
this.setState({
    label: ''
})
 }

 render(){

    return (
    <form className='item-add-form d-flex' onSubmit={this.onSubmit}>
        <input type="text"
        className='form-control'
        onChange={this.onLabelChange}
        placeholder="new"
        value={this.state.label}/>
        <button className='btn btn-outline-secondary'>
            Add item
        </button>
    </form>
  )
    
    }
}

