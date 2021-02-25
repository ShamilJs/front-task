import React from 'react';
import { useSelector } from 'react-redux';
import { useStyles } from './controlePagesStyle';

export const ControlePages = ({ btn, plusBtn, minusBtn, required }) => {
	const classes = useStyles();
	const price = useSelector(state => state.app.price);
	const selectData = useSelector(state => state.app.selectData);

	const effect = () => {
		if (!btn) {
			return <p className={classes.controlePages__text}>Не могу найти нужные исследования</p>
		}
		else {
			return 	(
				<p className={classes.controlePages__text}>
					Нажимая на кнопку, вы принимаете <span>Оферту об оказании услуг</span> и даете согласие на обработку 
					персональных данных в соответствии с <span>Политикой конфиденциальности</span>
				</p>)
		}
	}

    return (
        <div className={classes.controlePages}>
            <div className={classes.controlePages__block}>
                <button
					className={
						btn ? classes.btnActive : 
						classes.controlePages__btn}
					onClick={minusBtn}
				>Предыдущий шаг</button>
                <button
					className={
						(selectData.length && !btn) ? classes.btnActive : 
						(required && btn === 1) ? classes.btnActive : 
						classes.controlePages__btn
					}
					onClick={plusBtn}
				>
                    Следующий шаг
					<span className={btn ? classes.dn : ''}>
						{price} ₽
					</span>
                </button>
            </div>
			{effect()}
        </div>
    )
}