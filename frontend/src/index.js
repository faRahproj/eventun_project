/*!

=========================================================
* Paper Kit React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "bootstrap/scss/bootstrap.scss";
import "assets/scss/paper-kit.scss?v=1.3.0";
import "assets/demo/demo.css?v=1.3.0";
// pages
import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import LandingPage from "views/examples/LandingPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import DetailsPage from "views/examples/DetailsPage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import Signup from "views/examples/Signup.js";
import Explore from "views/examples/Explore.js";
import Createevent from "views/examples/Createevent.js";
import Sidebar from "views/examples/Sidebar.js";
// others

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/index" render={(props) => <Index {...props} />} />
      <Route
        path="/nucleo-icons"
        render={(props) => <NucleoIcons {...props} />}
      />
      <Route
        path="/landing-page"
        render={(props) => <LandingPage {...props} />}
      />
      <Route
        path="/profile-page"
        render={(props) => <ProfilePage {...props} />}
      />
      <Route
        path="/details-page"
        render={(props) => <DetailsPage {...props} />}
      />
      <Route
        path="/register-page"
        render={(props) => <RegisterPage {...props} />}
      />
      <Route
        path="/signup-page"
        render={(props) => <Signup {...props} />}
      />
      <Route
        path="/explore-page"
        render={(props) => <Explore {...props} />}
      />
      <Route
        path="/create-page"
        render={(props) => <Createevent {...props} />}
      />
      <Route
        path="/sidebar"
        render={(props) => <Sidebar {...props} />}
      />
      <Redirect to="/index" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
