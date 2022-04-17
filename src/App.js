import './App.css';
import Navbar from './Navbar/Navbar';
import CreateNewAccount from '../src/CreateNewAccount/CreateNewAccount'
import LoginOtp from '../src/CreateNewAccount/LoginOtp'
import ForgotPassword from '../src/ForgotPassword/ForgotPassword'
import Signin from './Signin/Signin';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
     <Navbar/> 
     <Switch>
          <Route path="/login">
          <Signin/>    
          </Route>
          <Route path="/createnewaccount">
          <CreateNewAccount/>
          </Route>
          <Route path="/loginotp">
          <LoginOtp/>
          </Route>
          <Route path="/forgotpassword">
          <ForgotPassword/>   
          </Route>
          <Route path="/otp">
          <LoginOtp/>
          </Route>
          <Route path="/createnewaccount">
          <CreateNewAccount/>
          </Route>
          <Route path="/login">
          <Signin/>    
          </Route>
      </Switch>
    </Router>
  </>
  );
}

export default App;

