import React, { useEffect } from 'react';
import './blockInputStyle.css';
import $ from 'jquery';
import 'jquery-mask-plugin';

export const BlockInput = ({type, title, value, setValue}) => {
	useEffect(() => {
		$('input[name="phone"]').mask('+7(000)000-00-00');
	})


    return (
        <div className="block-input">
			<label htmlFor={type} className="input-block_label">{title}</label>
			<input 
				className="input-block"
				autoComplete="off"
				name={type}
				type={type === 'date' ? type : "text"}
				value={value[type] ? value[type] : ''}
				onChange={e => {
					setValue(value => ({...value, [e.target.name]: e.target.value}))
				}}
			/>
        </div>
    )
}