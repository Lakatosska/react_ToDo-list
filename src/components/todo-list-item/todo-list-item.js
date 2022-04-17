import React from 'react';

import './todo-list-item.css';

// в отличии от функции класс не принимает props на вход
// props хранятся в свойстве this.props
export default class TodoListItem extends React.Component {
 /*
  constructor() {
    super();
    // state должен быть объектом,  где сохраняем информацию
    // создаем в нем свойство done, которое по умолчанию false
    this.state = {
      done: false,
    }
  }
  */
 // код выше можно написать короче:

  state = {
    done: false,
    important: false
  };

  // передаем в функцию setState объект с изменениями, которые хотим внести в state
  // в данном случае - по клику меняем состояние done на true
  onLabelClick = () => {
    this.setState(({done}) => {
      return {
        done: !done
      };
    });
  };

  onMarkImportant = () => {
    this.setState(({important}) => {
      return {
        important: !important
      };
    });
  };


  render() {

    const { label, onDeleted, onToggleImportant, onToggleDone } = this.props; 
    const { done, important } = this.state;

    let classNames = "todo-list-item";
    if (done) {
      classNames += " done";
    }

    if (important) {
      classNames += " important";
    }

    return (
      // если добавить done, то будет зачеркнуто
      <span className={classNames}> 
        <span
          className="todo-list-item-label"
          onClick={onToggleDone}
        >
          {label}
        </span>
  
        <button type="button"
            className="btn btn-outline-success btn-sm float-right"
            onClick={onToggleImportant}>
          <i className="fa fa-exclamation" />
        </button>
  
        <button type="button"
            className="btn btn-outline-danger btn-sm float-right"
            onClick={onDeleted}>
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