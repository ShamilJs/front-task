import { createUseStyles } from "react-jss"

export const useStyles = createUseStyles({
	dn: {
		display: [['none'], '!important'],
	},
	controlePages__btn: {
		width: '236px',
		height: '50px',
		background: '#C6D3FD',
		borderRadius: '10px',
		color: '#0036F5',
		border: 'none',
		pointerEvents: 'none',
		'&:focus': {
			outlineWidth: '0px'
		},
		'& span': {
			display: 'inline-block',
			marginLeft: '40px',
		}
	},
	btnActive: {
		background: [['#0036F5'], '!important'],
		width: '236px',
		height: '50px',
		borderRadius: '10px',
		border: 'none',
		color: '#FFFFFF',
		cursor: 'pointer',
		pointerEvents: 'all',
		'&:focus': {
			outlineWidth: '0px'
		},
		'& span': {
			display: 'inline-block',
			marginLeft: '40px',
		}
	},
	controlePages__text: {
		fontFamily: 'Raleway',
		fontSize: '14px',
		lineHeight: '16px',
		textAlign: 'center',
		color: '#7C89A8',
		marginTop: '15px',
	},
	controlePages: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: '20px',
		paddingBottom: '200px',
	},
	controlePages__block: {
		width: '488px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
})