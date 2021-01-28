import React from 'react';
import { useSelector } from 'react-redux';
import './controlePagesStyle.css';

export const ControlePages = ({ btn, plusBtn, minusBtn, required }) => {
	const price = useSelector(state => state.app.price);
	const selectData = useSelector(state => state.app.selectData);

    return (
        <div className="controlePages">
            <div className="controlePages__block">
                <button
					className={
						btn ? "controlePages__btn btn-active" : 
						"controlePages__btn"}
					onClick={minusBtn}
				>Предыдущий шаг</button>
                <button
					className={
						(selectData.length && !btn) ? "controlePages__btn btn-active" : 
						(required && btn === 1) ? "controlePages__btn btn-active" : 
						"controlePages__btn"
					}
					onClick={plusBtn}
				>
                    Следующий шаг <span className={btn ? "dn" : ''}>{price} ₽</span>
                </button>
            </div>
            <p className="controlePages__text">Не могу найти нужные исследования</p>
        </div>
    )
}