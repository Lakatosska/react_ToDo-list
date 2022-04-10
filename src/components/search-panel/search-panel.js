import React from 'react';

import './search-panel.css';

const SearchPanel = () => {
  // return <input placeholder='search'/>
  const searchText = 'Type here to search...';
  const searchStyle = {
    fontSize: '20px'
  }

  return <input 
    style = {searchStyle}
    placeholder = {searchText} //переменная теперь используется как placeholder
    disabled />; // эквивалент: disabled={true}. если не передать значение, то по умолчанию оно true

};

export default SearchPanel;