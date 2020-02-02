import React from 'react';
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import { Typography, CssBaseline, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        minHeight: '45vh',
        padding: theme.spacing(8),
        background: theme.palette.background.paper,        
    },
    detail: {
        position:'relative',
        height: 5,
        width: '22vw',
        backgroundColor: theme.palette.secondary.main,
        top: 5,
        zIndex: 6,
        display: 'block',
    },
  }),
);


export default function Footer(){
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <CssBaseline/>
            <Grid container direction='column' spacing={2}>
                <Grid item container direction='column'>
                    <Grid item>
                        <Typography variant='button'>
                            Este exemplo foi feito por Filipe Machado
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant='caption'>
                            Neste exemplo foi usado apenas ReactJS e suas extensões instaladas via npm.
                            Os subdomínios dessa página não foram progamados pois esta página se trata apenas de uma mera demonstração de como seria uma página de uma escola de inglês. 
                        </Typography>
                        <span className={classes.detail}/>
                    </Grid>
                </Grid>
                <Grid item>
                    <Typography variant='overline'>
                        CONTATO:
                    </Typography>

                    <Typography variant='overline' display='block'>
                        EMAIL: filipe__machado@hotmail.com
                    </Typography>
                    <Typography variant='overline' display='block'>
                        TELEFONE: (61) 9 8418-5535
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
}