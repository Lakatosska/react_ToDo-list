import React from 'react';

import './item-add-form.css';

export default class ItemAddForm extends React.Component {

  state = {
    label: ''
  };

  onLabelChange = (evt) => {
    this.setState({
      label: evt.target.value
    });
  };

  onSubmit = (evt) => {
    evt.preventDefault();
    this.props.onItemAdded(this.state.label);
    this.setState({
      label: ''
    });
  }

  render() {

    return (
      <form className='item-add-form d-flex'
            onSubmit={this.onSubmit}>

        <input type='text'
               className='form-control' 
               onChange={this.onLabelChange}
               placeholder='What needs to be done'
               //чтобы сделать элемент контроллируемым, надо чтобы значение (value) устанавливалось из состояния элемента
               value={this.state.label}/> 
        <button 
          className="btn btn-outline-secondary">
          <i className="fa" />
          Add Item
        </button>
      </form>
    )

  }
}