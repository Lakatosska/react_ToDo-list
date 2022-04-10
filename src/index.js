import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app/app'


ReactDOM.render(<App />, document.getElementById('root'));
// по-простому: превращает реакт-элементы в html-элементы
// 1м элементом принимает именно элемент, а не компонент: то есть <App />, а не App.