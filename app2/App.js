import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {IconContext} from "react-icons";

import "./index.scss";

import HomeView from "./containers/HomeView";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import SiteContext from "./SiteContext";
import PageLoader from  "./PageLoader";
// import LiveScore from "./LiveScore"

import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import reducer from "./features/reducer";

const C19Tracker = React.lazy(()=>import("./components/C19Tracker"));
const TodayWeather = React.lazy(()=>import("./containers/WeatherView"));

const reduxStore = configureStore({
  reducer
});

function App() {
  const [country, setCountry] = React.useState("in");
  return (<Provider store={reduxStore}>
    <Router>
      <SiteContext.Provider value={{country, setCountry:(c)=>setCountry(c)}}>
      <IconContext.Provider value={{className:"news-app-icons"}}>
        <Switch>
          <Route path="/profile/c19tracker">
            <React.Suspense fallback={<PageLoader/>}>
              <C19Tracker/>
            </React.Suspense>
          </Route>
          <Route path="/profile/weather">
            <React.Suspense fallback={<PageLoader/>}>
              <TodayWeather/>
            </React.Suspense>
          </Route>
          <Route path="/profile/about" component={About}/>
          {/* <Route path="/profile/football" component={LiveScore}/> */}
          <Route path="/profile/contact-us" component={ContactUs}/>
          <Route path="/profile" exact>
            <HomeView/>
          </Route>
        </Switch>
      </IconContext.Provider>
      </SiteContext.Provider>
    </Router>
  </Provider>
  );
}

export default App;
