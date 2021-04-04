import React from "react";
import { Route, Switch } from "react-router-dom";
import  LoginForm  from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import { UserForm } from './components/UserForm';
import { FormAdministratorsVerification } from './components/FormAdministratorsVerification';
import { FormPollingStationVetting } from './components/FormPollingStationVetting';
import { FormBursaryAward } from './components/FormBursaryAward';

const BaseRouter = () => (
    <Switch>
        <Route exact path='/' component={LoginForm}/>
        <Route exact path='/register-form' component={RegisterForm}/>
        <Route exact path='/application-form' component={UserForm} />
        <Route exact path='/verification-form' component={FormAdministratorsVerification} />
        <Route exact path='/pollingstation-vetting' component={FormPollingStationVetting} />
        <Route exact path='/bursary-award' component={FormBursaryAward} />
    </Switch>
);

export default BaseRouter;