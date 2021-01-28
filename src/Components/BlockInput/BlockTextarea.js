
import React from 'react';
import './blockInputStyle.css';

export const BlockTextarea = ({type, title, value, setValue}) => {


    return (
        <div className="block-input">
			<label htmlFor={type} className="input-block_label">{title}</label>
			<textarea 
                className="textarea-block"
                autoComplete="off"
                placeholder="Введите комментарий"
				name={type}
				value={value[type] ? value[type] : ''}
				onChange={e => {
					setValue(value => ({...value, [e.target.name]: e.target.value}))
				}}
			/>
            <div>
            <input type="checkbox" id="cb1"/> <label htmlFor="cb1">Перезвоните мне для уточнения заказа</label>
            </div>
        </div>
    )
}