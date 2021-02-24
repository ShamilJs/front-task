import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
	app: {
		background: '#F8FAFF'
    },
    page: {
        height: 'auto',
        marginTop: '50px',
    },
    page__container: { 
        width: '845px',
        height: '455px',
        background: '#FFFFFF',
        boxShadow: '0px 30px 100px rgba(166, 189, 219, 0.4)',
        borderRadius: '10px',
		margin: '0 auto',
		position: 'relative'
    },
    page__title: {
        fontFamily: 'Raleway',
        fontWeight: '600',
        fontSize: '24px',
        lineHeight: '28px',
        textAlign: 'center',
        color: '#2D3958',
        paddingTop: '52px',
        marginBottom: '20px',
    }
})