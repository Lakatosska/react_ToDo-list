import React from 'react';

import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import TodoList from '../todo-list/todo-list';
import ItemStatusFilter from '../item-status-filter/item-status-filter';

import './app.css';

/*
const el = <h1>Hello, World</h1>;
console.log(el); // очень легковесный объект с минимальным набором свойств - техника VirtualDOM
// тоже самое. babel превращает код JSX выше в запись ниже:
// const el = React.createElement('h1', null, 'Hello, World');
// можно писать реакт-проекты и без jsx, но с ним удобнее и лаконичнее
*/

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

      <TodoList todos={todoData} />
    </div>
  );
};

export default App;