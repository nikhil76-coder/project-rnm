import React from 'react';
import { BrowserRouter, Switch} from 'react-router-dom';
import AuthContextProvider from './contexts/AuthContect'
import './App.css';
import PrivateRoute from './auth/PrivateRoute';
import AdminRoute from './auth/AdminRoute';
import SuperAdminRoute from './auth/SuperAdminRouter';


import OrgUsers from './Userpage'

import Orgadmins from './Adminpage';
import SuperAdmin from './SuperAdmin'
import UserProfile from './components/UserProfile';
import Signin from './components/Signin';
import Signup from './components/Signup';
import PublicRoute from './auth/PublicRoute';
import Home from './components/Home';


const Routes = () => {
  return (
    <AuthContextProvider>
      <BrowserRouter>
          <Switch>
              <PublicRoute path="/signin" exact component={Signin} />
              <PublicRoute path="/signup" exact component={Signup} />
              <PublicRoute path="/" exact component={Home} />
              <AdminRoute path="/admin/dashboard" exact component={Orgadmins} />
              {/* <PrivateRoute path="/user/dashboard" exact component={OrgUsers} />  */}
              <SuperAdminRoute path="/superadmin/dashboard" exact component={SuperAdmin} />                
          
            <PrivateRoute path="/user/dashboard" exact component={OrgUsers} /> 
              <PrivateRoute path="/user/profile" exact component={UserProfile} /> 
              </Switch>     
      </BrowserRouter>
    </AuthContextProvider>
      
  );
};

function App() {
  return (
       <Routes/>
  );
}

export default App;
