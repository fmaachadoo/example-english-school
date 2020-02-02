import React from 'react';
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import Zoom from '@material-ui/core/Zoom';

import Logo from '../static/images/logo.png';

const items = [
  {
    title: '',
    width: '30%',
    main: true,
  },
  {
    title: 'Cursos',
    width: '14%',
    main: false,
  },
  {
    title: 'Certificações',
    width: '14%',
    main: false,
  },
  {
    title: 'Unidades',
    width: '14%',
    main: false,
  },
  {
    title: 'Matrículas',
    width: '14%',
    main: false,
  },
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        position: 'fixed',        
        display: 'flex',
        flexWrap: 'nowrap',
        minWidth: 300,
        width: '80%',
        left: '10%',
        zIndex: 3,
    },
    login: {
      left:'4%',
      top: 27,
      width: 130,
      height: 50,
      backgroundColor: theme.palette.secondary.main,
    },
    item: {
      position: 'relative',
      height: 100,
      [theme.breakpoints.down('xs')]: {
        width: '100% !important', // Overrides inline-style
        height: 50,
      },
      '&:hover, &$focusVisible': {
        zIndex: 1,
        '& $itemBackdrop': {
          opacity: 0.5,
        },        
        
      },
    },
    focusVisible: {},
    itemButton: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: theme.palette.common.white,
    },
    itemMainButton: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.black,
      },
    
    itemBackdrop: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      opacity: 0.5,
      transition: theme.transitions.create('opacity'),
    },
    itemMainBackdrop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundImage: `url(${Logo})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        opacity: 1,
        transition: theme.transitions.create('opacity'),
      },
    itemTitle: {
      position: 'relative',
      padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(1) + 6}px`,
    },
    
  }),
);



export default function Header() {
  const classes = useStyles();
  const trigger = useScrollTrigger();
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked(prev => !prev);
  };


  return (
    <div className={classes.root}>
      {items.map(image => (
        <Slide appear={false} direction='down' in={!trigger}>
        <ButtonBase
          focusRipple
          key={image.title}
          className={classes.item}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: image.width,
          }}
        >
          <span className={image.main ? classes.itemMainBackdrop : classes.itemBackdrop} />
          <span className={image.main ? classes.itemMainButton :classes.itemButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.itemTitle}
            >
              {image.title}
            </Typography>
          </span>
        </ButtonBase>
        </Slide>  
      ))}
      <Slide appear={false} direction='down' in={!trigger}>
        <Fab variant='extended' size='large' className={classes.login}>
          <Typography variant='body1'>
              Login
          </Typography>                                    
        </Fab>
      </Slide>
      
    </div>
  );
}