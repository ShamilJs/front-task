import { createUseStyles } from "react-jss"

export const useStyles = createUseStyles({
    
    listOfAnalyzes: {
        width: '975px',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '13px auto',
    },
    listOfAnalyzes__block: {
        width: '308px',
        height: '90px',
        background: '#FFFFFF',
        boxShadow: '0px 0px 33.1778px rgba(166, 189, 219, 0.4)',
        borderRadius: '10px',
        margin: '13px 13px 0 0',
        display: 'flex',
		justifyContent: 'space-between',
		'&:hover': {
			cursor: 'pointer',
		},
    },
    
    listOfAnalyzes__blockActive: {
		width: '308px',
        height: '90px',
        background: '#FFFFFF',
        boxShadow: '0px 0px 33.1778px rgba(166, 189, 219, 0.4)',
        borderRadius: '10px',
        margin: '13px 13px 0 0',
        display: 'flex',
		justifyContent: 'space-between',
        position: 'relative',
        '&:after': {
            position: 'absolute',
            content: '""',
            height: '100%',
            width: '4px',
            top: '0',
            right: '0',
            background: '#0036F5',
            borderTopRightRadius: '10px',
            borderBottomRightRadius: '10px',
        },
    },
    
    listOfAnalyzes__text: {
        flex: '0 0 230px',
        margin: '10px 0px 15px 10px',
		overflow: 'hidden',
		'& p': {
			marginBlockStart: '0',
			marginBlockEnd: '0',
		},
    },
    
    
    analyzes__title: {
        fontFamily: 'SF UI Display',
        fontWeight: '500',
        fontSize: '14px',
        lineHeight: '17px',
        letterSpacing: '0.02em',
        color: '#2F3854',
        marginBlockStart: '0',
        marginBlockEnd: '0',
        marginBottom: '5px',
    },
    analyzes__text: {
        'font-family': 'SF UI Display',
        'font-size': '12px',
        'line-height': '14px',
       	'letter-spacing': '0.02em',
        'color': '#9CA2B4',
        'height': '43px',
        'overflow': 'hidden',
        'margin-block-start': '0',
        'margin-block-end': '0',
    },
    
    
    analyzesProperties__price: {
        'font-family': 'SF UI Display',
        'font-weight': '500',
        'font-size': '14px',
        'line-height': '17px',
        'text-align': 'right',
        'letter-spacing': '0.02em',
        'color': '#2F3854',
        'margin-block-start': '0',
        'margin-block-end': '0',
    },
    analyzesProperties__date: {
        'font-family': 'SF UI Display',
        'font-style': 'normal',
        'font-weight': '500',
        'font-size': '12px',
        'line-height': '14px',
        'text-align': 'right',
        'letter-spacing': '0.02em',
        'margin-bottom': [['10px'], '!important'],
        'color': '#9CA2B4',
    },
    
    analyzesProperties__open: {
        width: '28px',
        height: '28px',
        background: '#F6F8FD',
        'border-radius': '6px',
        color: '#CBD0DE',
        display: 'flex',
        'justify-content': 'center',
		'align-items': 'center',
		'& span': {
			'font-size': '28px',
        	display: 'block',
		}
    },

    analyzesProperties: {
        display: 'flex',
        'flex-direction': 'column',
        'justify-content': 'center',
        'align-items': 'center',
		margin: '10px 10px 10px 10px',
		'& p': {
			marginBlockStart: '0',
			marginBlockEnd: '0',
		},
    },
})

