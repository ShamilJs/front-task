import React from 'react';
import { useSelector } from 'react-redux';
import './controlePagesStyle.css';

export const ControlePages = () => {
    const price = useSelector(state => state.app.price);

    return (
        <div className="controlePages">
            <div className="controlePages__block">
                <button className="controlePages__btn">Предыдущий шаг</button>
                <button className="controlePages__btn btn-active">
                    Следующий шаг <span>{price} ₽</span>
                </button>
            </div>
            <p className="controlePages__text">Не могу найти нужные исследования</p>
        </div>
    )
}