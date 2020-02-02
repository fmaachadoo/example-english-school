import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { Theme, makeStyles, createStyles, useTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';

import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

import ImgInter from '../static/images/img1.jpg';
import ImgProva from '../static/images/img2.jpg';
import ImgTalk from '../static/images/img3.jpg';
import Button from '@material-ui/core/Button';
import Pagination from './Pagination'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const pages = [
    {
        text: 'Inglês com preparo de verdade é aqui!',
        subText: 'Você já está preparado para sair falando inglês nas suas viagens para o exterior? Aqui você aprende com confiança!', 
        buttonText: 'Faça já o Teste de Nivelamento',
        backgroundImage:`url(${ImgTalk})`,
    },
    {
        text: 'IELTS Exams Faça conosco',
        subText: 'Exame 100% online com diversas datas disponíveis.',
        buttonText: 'Quero saber mais sobre o exame',
        backgroundImage:`url(${ImgProva})`,
    },
    {
        text: 'Cult Trips',
        subText: 'Suas viagens e seus sonhos se tornando realidade.',
        buttonText: 'Quero saber mais sobre intercâmbio',
        backgroundImage:`url(${ImgInter})`,
    }
]


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        height:'100vh',
        width: '100vw',        
    },
    item: {
        height: '100vh',
               
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
    
  }),
);

export default function SplashScreen(){
    const classes = useStyles();
    const [value, setValue] = useState(0)
    const theme = useTheme();

    const handleChangeIndex = (index: number) => {
        setValue(index);
      };

    return(
        <div className={classes.root}>
            <CssBaseline/>
            <AutoPlaySwipeableViews index={value} onChangeIndex={handleChangeIndex}>
            {pages.map(page=>(
                    <Container className={classes.root} style={{backgroundImage: `${page.backgroundImage}`, padding: 0 }}>
                        <Grid container className={classes.item} justify='center' alignItems='center' direction='column' >                            
                            <Grid item container wrap='nowrap' justify='center' alignItems='center' direction='column' >   
                                <Grid item>
                                    <Typography variant='h3'>
                                        {page.text}
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant='h6'>
                                        {page.subText}
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid item padding-top={3}>
                                <Fab variant='extended' className={classes.extendedFab}>
                                    <Typography className={classes.extendedText} variant='body1'>
                                        {page.buttonText}
                                    </Typography>
                                    <DoubleArrowIcon className={classes.extendedButton}/>
                                </Fab>
                            </Grid>
                        </Grid>        
                    </Container>
            ))}
            </AutoPlaySwipeableViews>
            <Pagination activeStep={value} setActiveStep={setValue}/>    
        </div>
    )
}