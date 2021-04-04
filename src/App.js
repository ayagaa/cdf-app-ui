import logo from './logo.svg';
import { BrowserRouter as Router } from "react-router-dom";
import BaseRouter from "./routes";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { red, green } from '@material-ui/core/colors';
import './App.css';
//import { UserForm } from './components/UserForm';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: red[500],
    },
    secondary: {
      main: green[500],
    },
  },
});


function App() {
  return (
    <div className="App">
      {/* <MuiThemeProvider> */}
      <ThemeProvider theme={theme}>
        <Router>
          <BaseRouter />
        </Router>
      </ThemeProvider>

      {/* </MuiThemeProvider> */}
    </div>
  );
}

export default App;
