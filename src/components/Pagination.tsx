import React, { Dispatch, SetStateAction, useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';


const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    flexGrow: 1,
    zIndex: 5,
    position: 'absolute',
    top: '90vh',
    left: '42vw',
  },
});

type Props = {
    activeStep: number;
    setActiveStep: (active:number) => void;
}

export default function DotsMobileStepper({activeStep, setActiveStep}:Props) {
    const classes = useStyles();
    const theme = useTheme();

    const handleNext = () => {
        if (activeStep >= 2){
            setActiveStep(0)
        }else{
        setActiveStep(activeStep + 1);
        }
    };
  
    const handleBack = () => {
        if(activeStep<=0){
            setActiveStep(2);
        }else{
        setActiveStep(activeStep - 1);    
        }
    };
  
    return (
      <MobileStepper
        variant="dots"
        steps={3}
        position="static"
        activeStep={activeStep}
        className={classes.root}
        nextButton={
          <Button size="small" onClick={handleNext} /*disabled={activeStep === 2}*/>
            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} /*disabled={activeStep === 0}*/>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }
      />
    );
  }