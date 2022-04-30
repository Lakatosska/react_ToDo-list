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

  maxId = 100;

  state = {
    todoData: [
      this.createTodoItem('Drink Coffee'),
      this.createTodoItem('Make Awesome App'),
      this.createTodoItem('Have a lunch'),
    ],
    term: '',
    filter: 'all' // active, all, done
  };

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++
    }
  }

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

  addItem = (text) => {
    const newItem = this.createTodoItem(text)

    this.setState(({todoData}) => {

      // const newArray = todoData.push(newItem); - так нельзя, т.к. изменяем массив!

      const newArray = [
        ...todoData, newItem
      ];

      return {
        todoData: newArray
      }
    })


    // add element in array ?


    console.log('хочу добавить элемент', text)
    
  };

  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex((el) => el.id === id);
      
      // 1. update object
      const oldItem = arr[idx];
      const newItem = {...oldItem, 
        [propName]: !oldItem[propName]};

      // 2. construct new array
      return [
        ...arr.slice(0, idx),
        newItem,
        ...arr.slice(idx + 1)
      ];
  }

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'done')
      };
    });
  };

  onToggleImportant = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'important')
      };
    });
  };

  onSearchChange = (term) => {
    this.setState({ term });
  }

  onFilterChange = (filter) => {
    this.setState({ filter });
  }

  search(items, term) {
    if (term.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.label
          .toLowerCase()
          .indexOf(term.toLowerCase()) > -1;
    });
  };

  filter(items, filter) {
    switch(filter) {
      case 'all': 
        return items;
      case 'active':
        return items.filter((item) => !item.done);
      case 'done':
        return items.filter((item) => item.done);
      default:
        return items;
    }
  }


  render() {

    const { todoData, term, filter } = this.state;

    const visibleItems = this.filter(
      this.search(todoData, term), filter);

    // берем элементы, у которых done - true
    const doneCount = todoData.filter((el) => el.done).length;

    const todoCount = todoData.length - doneCount;

    return (
    <div className="todo-app">

      <AppHeader toDo={todoCount} done={doneCount} />

      <div className="top-panel d-flex">
        <SearchPanel 
          onSearchChange={this.onSearchChange} />
        <ItemStatusFilter 
          filter={filter}
          onFilterChange={this.onFilterChange} />
      </div>

      <TodoList todos={ visibleItems } 
        onDeleted={ this.deleteItem }
        onToggleImportant={this.onToggleImportant}
        onToggleDone={this.onToggleDone} // получил новый ивент
      />

      <ItemAddForm onItemAdded={ this.addItem } />   

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