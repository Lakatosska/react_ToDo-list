import React from 'react';

import './todo-list-item.css';

// в отличии от функции класс не принимает props на вход
// props хранятся в свойстве this.props
export default class TodoListItem extends React.Component {


  render() {

    const { label, important = false } = this.props; 

    const style = {
      color: important ? 'steelblue' : 'black',
      fontWeight: important ? 'bold' : 'normal'
    };

    return (
      <span className="todo-list-item">
        <span
          className="todo-list-item-label"
          style={style}>
          {label}
        </span>
  
        <button type="button"
            className="btn btn-outline-success btn-sm float-right">
          <i className="fa fa-exclamation" />
        </button>
  
        <button type="button"
            className="btn btn-outline-danger btn-sm float-right">
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );

  }

}



/*
// внутри props будут названия всех свойств которые мы передали 
const TodoListItem = (props) => {
  return <span>{ props.label }</span>
}


// деструктуризация
// если не передаем important вообще, то оно false
const TodoListItem = ({ label, important = false }) => {

  const style = {
    color: important ? 'steelblue' : 'black',
    fontWeight: important ? 'bold' : 'normal'
  };

  // передаем константу style в span
  return (
    <span className="todo-list-item">
      <span
        className="todo-list-item-label"
        style={style}>
        {label}
      </span>

      <button type="button"
          className="btn btn-outline-success btn-sm float-right">
        <i className="fa fa-exclamation" />
      </button>

      <button type="button"
          className="btn btn-outline-danger btn-sm float-right">
        <i className="fa fa-trash-o" />
      </button>
    </span>
  );
}

export default TodoListItem;
*/