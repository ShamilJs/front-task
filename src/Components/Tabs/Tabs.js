import React from 'react';
import './tabsStyle.css';

export const Tabs = ({btn}) => {
	let title = !btn ? 'Выбор исследований' : 'Оформление заказа';
	let tabs = [
		{
			number: 1,
			text: 'Выбор исследований',
			activeClass: !btn ? 'tabs-block-active' : ''
		},
		{
			number: 2,
			text: 'Оформление заказа',
			activeClass: btn === 1 ? 'tabs-block-active' : ''
		},
		{
			number: 3,
			text: 'Корзина',
			activeClass: btn === 2 ? 'tabs-block-active' : ''
		}
	]

	return (
		<div className="tabs">
			<div className="tabs__title">{title}</div>
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