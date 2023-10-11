import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import MaterialTheme from '../MaterialTheme/MaterialTheme';

import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import InfoPage from '../InfoPage/InfoPage';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import RequestFormPage from '../RequestFormPage/RequestFormPage';
import RequestItemPage from '../RequestItemPage/RequestItemPage';
import OfferFormPage1 from '../OfferFormPage/OfferFormPage1';
import OfferFormPage2 from '../OfferFormPage/OfferFormPage2';
import OfferItemPage from '../OfferItemPage/OfferItemPage';
import ActivityFeed from '../ActivityFeed/ActivityFeed';
import UserFormPage from '../UserFormPage/UserFormPage';
import UserViewGroupPage from '../UserViewGroupPage/UserViewGroupPage';
import UserProfile from '../UserProfile/UserProfile';
import HowItWorks from '../HowItWorks/HowItWorks';
import EditProfile from '../EditProfile/EditProfile';
import EditOfferItemPage from '../OfferItemPage/EditOfferItemPage';

import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'



function App() {
  const dispatch = useDispatch();

  const user = useSelector(store => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  // changes to the material ui color palette
  let theme = MaterialTheme();

  return (
    <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
    <Router>
      <div>
        <Nav />
        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
          <Redirect exact from="/" to="/home" />

          {/* Visiting localhost:3000/about will show the about page. */}
          <Route
            // shows AboutPage at all times (logged in or not)
            exact
            path="/about"
          >
            <AboutPage />
          </Route>

          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
          
          <ProtectedRoute
            // logged in shows UserPage else shows LoginPage
            exact
            path="/user"
          >
            <UserPage />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows UserPage else shows LoginPage
            exact
            path="/howitworks"
          >
            <HowItWorks />
          </ProtectedRoute>

          <ProtectedRoute

            // newly registered user should be directed to this page immediately after registering!
            exact
            path="/userform"
            >
              <UserFormPage />
            </ProtectedRoute>

          <ProtectedRoute
            // logged in shows UserProfile else shows LoginPage
            exact
            path="/profile"
          >
            <UserProfile />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows UserProfile else shows LoginPage
            exact
            path="/editprofile"
          >
            <EditProfile />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows ActivityFeed else shows LoginPage
            exact
            path="/activity"
          >
            <ActivityFeed />
          </ProtectedRoute>

          <ProtectedRoute
            // Group page - user view
            exact
            path="/usergroup"
          >
            <UserViewGroupPage />
          </ProtectedRoute>

          <ProtectedRoute
            // request form view
            exact
            path="/requestform"
          >
              <RequestFormPage />
          </ProtectedRoute>

          <ProtectedRoute
            // offer item view
            exact
            path="/requestitem"
          >
              <RequestItemPage />
          </ProtectedRoute>

          <ProtectedRoute
            // offer form view 1
            exact
            path="/offerform1"
          >
              <OfferFormPage1 />
          </ProtectedRoute>

          <ProtectedRoute
            // offer form view 1 (back button view from offer form view 2)
            exact
            path="/offerform1/:itemName"
          >
              <OfferFormPage1 />
          </ProtectedRoute>

          <ProtectedRoute
            // offer form view 2
            exact
            path="/offerform2/:itemName"
          >
              <OfferFormPage2 />
          </ProtectedRoute>
          
          <ProtectedRoute
            // offer item view
            exact
            path="/offeritem"
          >
              <OfferItemPage />
          </ProtectedRoute>

          <ProtectedRoute
            // offer item view
            exact
            path="/updateoffer"
          >
              <EditOfferItemPage />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/info"
          >
            <InfoPage />
          </ProtectedRoute>

          <Route
            exact
            path="/login"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the login page
              <LoginPage />
            }
          </Route>

          <Route
            exact
            path="/registration"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the registration page
              <RegisterPage />
            }
          </Route>

          <Route
            exact
            path="/home"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the Landing page
              <LandingPage />
            }
          </Route>

          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
    </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
