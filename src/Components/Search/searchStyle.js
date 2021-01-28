import { createUseStyles } from "react-jss"

export const useStyles = createUseStyles({
	search__input: {
		'width': '784px',
		'height': '30px',
		'border': 'none',
		'border-bottom': '2px solid #CBD0DE',
		'font-family': 'Raleway',
		'font-size': '16px',
		'line-height': '19px',
		'letter-spacing': '0.02em',
		'color': '#CBD0DE',
		'text-align': 'center',
		'background': '#F8FAFF',
		'&:focus': {
			'outline-width': '0px'
		}
	},
	
	search: {
		'display': 'flex',
		'justify-content': 'center',
		'align-items': 'center',
	}
})