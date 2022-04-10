import React from 'react';

import TodoListItem from '../todo-list-item/todo-list-item';
import './todo-list.css';

// правильно будет, если спроектировать компонент TodoList так, чтобы он отвечал
// только за отображение списка, неважно откуда данные приходят и куда уходят
// этот элемент должен получать данные списка дел в качестве одного из своих свойств
/*
const TodoList = ({ todos }) => {
  return(
    <ul>
      <li><TodoListItem 
        label={todos[0].label}
        important={todos[0].important}/></li>
      <li><TodoListItem 
        label={todos[1].label}
        important={todos[1].important}/></li>
    </ul>
  );
};

// еще лаконичней
const TodoList = ({ todos }) => {
  const elements = todos.map((item) => {
    return(
      <li>
        <TodoListItem 
          label={item.label}
          important={item.important}/>
      </li>
    )
  })

  return(
    <ul>
      { elements }
    </ul>
  );
};
*/

const TodoList = ({ todos }) => {

  const elements = todos.map((item) => {

    const { id, ...itemProps } = item;

    return(
      <li key={id} className='list-group-item'>
        <TodoListItem { ...itemProps }/> 
      </li>
    )
  })

  return(
    <ul className='list-group todo-list'>
      { elements }
    </ul>
  );
};

// <TodoListItem { ... item }/> - означает взять каждое св-во из объекта item 
// и передать его в качестве атрибута вместе со значением в TodoListItem
// 'list-group', 'list-group-item' - эти классы определены в bootstrap, пропали точки и появились отступы


export default TodoList;