import { createUseStyles } from "react-jss"

export const useStyles = createUseStyles({
	categories__text: {
		fontFamily: 'SF UI Display',
		fontWeight: '500',
		fontSize: '13px',
		lineHeight: '16px',
		letterSpacing: '0.02em',
		color: '#2F3854',
		margin: '0 0 0 10px',
	},
	
	categories__block: {
		width: '120px',
		height: '95.25px',
		background: '#FFFFFF',
		boxShadow: '0px 0px 33.1778px rgba(166, 189, 219, 04)',
		borderRadius: '10px',
		marginRight: '13px',
		marginBottom: '13px',
		cursor: 'pointer',
		'&:hover': {
			background: '#0036F5',
			transitionDuration: '500ms',
		},
		'&:hover $categories__text': {
			color: '#FFFFFF',
			transitionDuration: '500ms',
		},
		'&:hover $categories__img': {
			filter: 'brightness(0) invert(1)', 
			transitionDuration: '500ms',
		},
	},
	categories__blockActive : {
		width: '120px',
		height: '95.25px',
		background: '#0036F5',
		transitionDuration: '500ms',
		boxShadow: '0px 0px 33.1778px rgba(166, 189, 219, 04)',
		borderRadius: '10px',
		marginRight: '13px',
		marginBottom: '13px',
		cursor: 'pointer',
		'& $categories__text': {
			color: '#FFFFFF',
			transitionDuration: '500ms',
		},
		'& $categories__img': {
			filter: 'brightness(0) invert(1)',  
			// background: '#FFFFFF',
			transitionDuration: '500ms',
		},
	},
	categories__img: {
		width: '22px',
		height: '22px',
		margin: '12px 0 17px 10px',
		'& img': {
			width: '100%',
			height: '100%',
		}
	},

	categories: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		margin: '40px 40px 0 40px',
		'flex-wrap': 'wrap',
		
	}
})

