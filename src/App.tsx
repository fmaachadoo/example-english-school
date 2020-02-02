import React from 'react';
import 'typeface-roboto';
import { Theme ,createStyles , makeStyles , ThemeProvider , createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Header from './components/header';
import SplashScreen from './components/splashScreen';
import AddInfo from './components/AdditionalInfo';
import ExtraInfo from './components/ExtraInfo';
import Footer from './components/Footer';

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#403461',
    },
    secondary:{
      main: '#ff393c',
    },
  },
});



const App: React.FC = () => {
  return (
    <div>      
      <ThemeProvider theme={darkTheme}>
          <CssBaseline/>
          <Header/>
          <AddInfo/>
          <SplashScreen/>
          <ExtraInfo/>
          <Footer/>
      </ThemeProvider>  
    </div>
  );
}

export default App;
