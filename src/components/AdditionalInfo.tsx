import React, { useState } from 'react';
import Fab from '@material-ui/core/Fab';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Theme, makeStyles, createStyles, useTheme } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import AddIcon from '@material-ui/icons/Add';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        position: 'fixed',
        bottom: '10%',
        right: '4%',
        display: 'flex',
        flexWrap: 'wrap',
        background: 'linear-gradient(45deg, #ffeb3b 10%, #ff9800 90%)',
        zIndex: 4,
    },
    facebook: {
        background: '#3b5998',
    },
    github: {
        background: '#6e5494',
    },
    whatsapp: {
        background: '#25d366',
    },
  }),
);

export default function AddInfo(){
    const classes = useStyles()
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return(
        <div>
            <CssBaseline/>
            <Fab variant='round' className={classes.root} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                <AddIcon fontSize='large' />
            </Fab>
            <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
            >
                <MenuItem onClick={handleClose}><Fab href='http://www.github.com/fmaachadoo' className={classes.github}><GitHubIcon/></Fab></MenuItem>
                <MenuItem onClick={handleClose}><Fab href='http://www.facebook.com/fmaachadoo' className={classes.facebook}><FacebookIcon/></Fab></MenuItem>
                <MenuItem onClick={handleClose}> <Fab href='http://wa.me/5561984185535' className={classes.whatsapp}><WhatsAppIcon/></Fab></MenuItem>
            </Menu>
        </div>
    );
}