import React from 'react';

import './item-add-form.css';

export default class ItemAddForm extends React.Component {

  render() {

    const { addItem } = this.props; 


    return (

      <div className="item-add-form">
        <button type="button"
          className="btn btn-outline-secondary"
          onClick={ this.addItem }>
          <i className="fa" />
        Add Item
        </button>
      </div>
    )
  }
}