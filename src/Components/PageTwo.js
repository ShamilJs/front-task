import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { BlockInput } from './BlockInput/BlockInput';
import { BlockTextarea } from './BlockInput/BlockTextarea';

export const PageTwo = ({ setRequired, btn }) => {
	const selectData = useSelector(state => state.app.selectData);
	const [value, setValue] = useState({ analyzes: selectData});
	const [confirm, setConfirm] = useState(false);
	
	useEffect(() => {
		if (value.date &&
			value.adress &&
			value.phone &&
			value.date !== '' &&
			value.adress !== '' &&
			value.phone !== '') setRequired(true)
		else setRequired(false)
		if (btn === 2) console.log(value);
		if (value.phone && value.phone !== '') setConfirm(true)
		else setConfirm(false)
		// eslint-disable-next-line
	}, [value, btn])

    return (
        <div className="page">
            <div className="page__container">
				<div className="page__title">Заполните ваши данные</div>
				<div className="block-form">
					<div className="block-form__left">
						<BlockInput
							type='date'
							title='Время сдачи'
							value={value}
							setValue={setValue}
						/>
						<BlockInput
							type='adress'
							title='Адрес'
							value={value}
							setValue={setValue}
						/>
						<div className="block-flex">
							<BlockInput
								type='apartment'
								title='Квартира'
								value={value}
								setValue={setValue}
							/>
							<BlockInput
								type='intercom'
								title='Домофон'
								value={value}
								setValue={setValue}
							/>
							<BlockInput
								type='entrance'
								title='Подъезд'
								value={value}
								setValue={setValue}
							/>
							<BlockInput
								type='floor'
								title='Этаж'
								value={value}
								setValue={setValue}
							/>
						</div>
						<BlockInput
							type='phone'
							title='Телефон'
							value={value}
							setValue={setValue}
						/>
					</div>
					<div className="block-form__right">
						<BlockTextarea
							type='comment'
							title='Комментарий'
							value={value}
							setValue={setValue}
						/>
					</div>
				</div>
			<button
				className={
					confirm ?
					"controlePages__btn input-bnt btn-active" :
					"controlePages__btn input-bnt"
				}
			>Подтвердить</button>
			</div>
        </div>
    )
}