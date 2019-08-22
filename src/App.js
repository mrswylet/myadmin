import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import Menu from './components/menu'
import Body from './components/body'

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Марья',
  lastName: 'Моревна'
};

const menuList = {
  'Мониторинг': ['Клиенты', 'Заказы', 'Отзывы', 'Аналитика'],
  'Организация': ['Информация и реквизиты', 'Филиалы', 'Новости и акции', 'Уровни кэшбека'],
  'Продажи ': ['Товары и услуги', 'Доставка и оплата', 'Опции товаров', 'Импорт и экспорт'],
  'Управление бюджетом': ['Пополнить баланс', 'Счета и списания'],
};

function App() {
  return (
    <div>
      <Header userName={'Anton'} />
      <Menu menuList={menuList} />
      <Body />
    </div>
  );
}

export default App;
