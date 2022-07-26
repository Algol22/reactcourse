import React, {Component} from 'react'
import { render } from 'react-dom'
import './item-add-form.css';

export default class itemAddForm extends Component {
  
 

 render(){

    return (
    <div className='item-add-form'>
        <button className='btn btn-outline-secondary' onClick={()=>this.props.onItemAdded('hello world')}>
            Add item
        </button>
    </div>
  )
    
    }
}

