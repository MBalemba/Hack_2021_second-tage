import './assets/font/Gilroy/stylesheet.css'
import './App.css';
import './Styles.scss'
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import {Routes} from "./routes";
import {LOGIN_ROUTE} from "./pagePath";


function App() {

    console.log(process.env.REACT_APP_API_URL)
  return (
      <BrowserRouter className="App">
        <Switch>
            {Routes.map(({path, Component}) =>
                <Route exact key={path} path={path} component={Component}/>
            )}

            <Redirect to={LOGIN_ROUTE}/>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
