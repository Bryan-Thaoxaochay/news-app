import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Auth0Provider } from "@auth0/auth0-react";


ReactDOM.render(
    <Auth0Provider
        domain="dev-gorzoijf.us.auth0.com"
        clientId="Vp8Jdu2rlfvi3CVtTm71PHJAihmJMdi2"
        redirectUri="https://news-app-5.herokuapp.com"
    >
        <App />
    </Auth0Provider>,
     document.getElementById("root")
);