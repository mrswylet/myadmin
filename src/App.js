import React  from 'react';
// import logo from './logo.svg';
import './scss/style.scss';
import Header from './components/Header'
import Menu   from './components/Menu'
import Body   from './components/Body'

const menuList = {
	'Мониторинг': ['Клиенты', 'Заказы', 'Отзывы', 'Аналитика'],
	'Организация': ['Информация и реквизиты', 'Филиалы', 'Новости и акции', 'Уровни кэшбека'],
	'Продажи ': ['Товары и услуги', 'Доставка и оплата', 'Опции товаров', 'Импорт и экспорт'],
	'Управление бюджетом': ['Пополнить баланс', 'Счета и списания'],
};


class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className='app'>
				<Header userName={'Anton'}/>
				<Menu menuList={menuList}/>
				<Body/>
			</div>
		);
	}
}


export default App;
