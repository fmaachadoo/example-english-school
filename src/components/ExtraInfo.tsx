import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Theme, makeStyles, createStyles, useTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import ImageOne from '../static/images/home_mob.jpg';
import ImageTwo from '../static/images/info2.jpg';
import ImageThree from '../static/images/info3.jpg';
import ImageFour from '../static/images/info4.jpg';
import Avatar from '@material-ui/core/Avatar';
import Fab from '@material-ui/core/Fab';

const data = [
    {
        title: 'Flexibilidade',
        text: 'Nossos alunos adultos têm acesso online a um professor da Cultura e, se precisarem, podem solicitar agendamento de aulas em outro horário ou filial',        
        img: ImageOne,
    },
    {
        title: 'Act Global',
        text: 'Projetos em inglês, sobre temas ligados a arte, cultura, cidadania e empreendedorismo, que ajudam o aluno a desenvolver habilidades relacionadas à comunicação, liderança e criatividade',        
        img: ImageTwo,
    },
    {
        title: 'Conversação',
        text: 'Temos grande foco no uso prático da língua, com tempo dedicado à conversação e, inclusive, aulas dedicadas exclusivamente a essa competência, com simulações de situações de vida real ou mesmo de entrevistas e reuniões de trabalho',        
        img: ImageThree,
    },
    {
        title: 'Reconhecimento internacional',
        text: 'Qualidade de ensino que proporciona os maiores índices de aprovação nos Cambridge English Exams',        
        img: ImageFour,
    }
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        minWidth: '100vw',
        background: 'linear-gradient(260deg, #282d3d 0%, #403461 26%, #261e34 100%)',        
    },
    gridContainer: {
        position: 'relative',
        top: theme.spacing(6),
    },
    gridItem: {
        minHeight:'40vh',
    },
    even:{
        position: 'relative',
        left: '0%',
        maxWidth: '60vw',
        minWidth: '45vw',
        direction: 'ltr',
        padding: theme.spacing(2),
        minHeight: '40vh',
        background: theme.palette.secondary.main,
        color: '#ffffff',
    },
    isOdd:{
        left: '2%',
        position: 'relative',      
        minWidth: '45vw',
        maxWidth: '60vw',
        direction: 'rtl',
        minHeight: '50vh',
        padding: theme.spacing(2),
        background: '#f1f0ff',
        color: '#000000',
    },
    image:{
        width: '35vw',
        height: 'auto',
    },
    title:{
        textAlign: 'center',
        maxWidth: '80vw',
        wrap: 'nowrap',
        padding: theme.spacing(4),
    },
    extendedFab: {
        margin: theme.spacing(1),
        zIndex: 0,
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText,
    },
    extendedButton: {
        marginRight: theme.spacing(10),
        marginLeft: theme.spacing(2),
        zIndex: 0,
    },
    extendedText: {
        marginLeft: theme.spacing(12),
        zIndex: 0,
    },
    button: {
        position: 'relative',
        top: '8vh',
        minHeight: '50vh',
    },
  }),
);

function isOdd (index: number){
    if (index%2==0){
        return true
    }else{
        return false
    }
}

export default function ExtraInfo(){
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <CssBaseline/>
            <Grid container alignItems='center' direction='column' spacing={6} className={classes.gridContainer}>
                <Grid item>    
                    <Typography variant='h1' className={classes.title} display='block'>
                        Aqui o inglês vai muito além da língua
                    </Typography>
                </Grid>
                {data.map((info, index) => (
                    <Grid container item className={classes.gridItem} direction={isOdd(index) ? 'row-reverse' : 'row'} justify={isOdd(index) ? 'center' : 'flex-start'} alignItems={isOdd(index) ? "center" : "flex-end"} >
                        <Grid item>    
                            <Paper className={isOdd(index) ? classes.isOdd : classes.even}>        
                                <Grid container spacing={3} direction='column' wrap='nowrap' >                            
                                    <Grid item>
                                        <Typography variant='h2'>
                                            {info.title}
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant='h6'>    
                                            {info.text}                                        
                                        </Typography>
                                    </Grid>
                                    
                                </Grid>
                            </Paper>
                        </Grid>
                        <Grid item>    
                            <Avatar src={info.img} variant="square" className={classes.image}/>                              
                        </Grid>                        
                    </Grid>
                ))}
                <Grid item className={classes.button} >
                    <Fab variant='extended' className={classes.extendedFab}>
                        <Typography className={classes.extendedText} variant='body1'>
                            Confira mais sobre a English School
                        </Typography>
                        <DoubleArrowIcon className={classes.extendedButton}/>
                    </Fab>
                </Grid>
            </Grid>
        </div>
    );
}