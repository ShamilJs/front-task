import React from 'react';
import './tabsStyle.css';

export const Tabs = (title) => {
	let tabs = [
		{
			number: 1,
			text: 'Выбор исследований',
			activeClass: 'tabs-block-active'
		},
		{
			number: 2,
			text: 'Оформление заказа',
			activeClass: ''
		},
		{
			number: 3,
			text: 'Корзина',
			activeClass: ''
		}
	]

	return (
		<div className="tabs">
			<div className="tabs__title">Выбор исследований</div>
			<div className="tabs__select">
				{tabs.map((item, i) => (
					<div
						className={`tabs__item tabs-block ${item.activeClass}`}
						key={i}
					>
						<div className="tabs-block__number">
							<p>{item.number}</p>
						</div>
						<p className="tabs-block__text">{item.text}</p>
					</div>
				))}				
			</div>
		</div>
	)
}