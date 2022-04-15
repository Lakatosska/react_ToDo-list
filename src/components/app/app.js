import React from 'react';

import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import TodoList from '../todo-list/todo-list';
import ItemStatusFilter from '../item-status-filter/item-status-filter';
import ItemAddForm from '../item-add-form/item-add-form';

import './app.css';

/*
const el = <h1>Hello, World</h1>;
console.log(el); // очень легковесный объект с минимальным набором свойств - техника VirtualDOM
// тоже самое. babel превращает код JSX выше в запись ниже:
// const el = React.createElement('h1', null, 'Hello, World');
// можно писать реакт-проекты и без jsx, но с ним удобнее и лаконичнее
*/

export default class App extends React.Component { 

  state = {
    todoData: [
      { label: 'Drink Coffee', important: false, id: 1 },
      { label: 'Make Awesome App', important: true, id: 2 },
      { label: 'Have a lunch', important: false, id: 3 },  
    ]
  };

  deleteItem = (id) => {
    
    // принимает объект state, деструктурируем
    this.setState(({ todoData }) => {

      const idx = todoData.findIndex((el) => el.id === id);
      //console.log(idx);
      //todoData.splice(idx, 1);

      // [a, b, c, d, e]
      // [a, b,    d, e]

      // slice в отличие от splice не изменяет массив
      const before = todoData.slice(0, idx)
      // не передаем второй аргумент => до конца
      const after = todoData.slice(idx + 1)
      
      // состоит из всех элементов before и after
      const newArray = [
        ...before, ...after
      ];

      return {
        todoData: newArray
      }
    });
  };

  addItem = () => {
    console.log('хочу добавить элемент')
  }

  render() {

    return (
    <div className="todo-app">

      <AppHeader toDo={1} done={3} />

      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>

      <TodoList todos={ this.state.todoData } 
        onDeleted={ this.deleteItem }/>

      <ItemAddForm />   

    </div>
    )
  }
};




/*
const App = () => { 

  const todoData = [
    { label: 'Drink Coffee', important: false, id: 1 },
    { label: 'Make Awesome App', important: true, id: 2 },
    { label: 'Have a lunch', important: false, id: 3 },
  ];

  return (
    <div className="todo-app">
      <AppHeader toDo={1} done={3} />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>

      <TodoList todos={todoData} 
      onDeleted={(id) => console.log('del', id)}/>
    </div>
  );
};
*/