import React from "react";
import { Route } from "react-router-dom";
import { LoginPage } from "../../components";

export const LoginPageRoute = props => <Route render={() => <LoginPage {...props} />} />;
