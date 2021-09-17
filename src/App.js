import './assets/font/Gilroy/stylesheet.css'
import './App.css';
import './Styles.scss'
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import {Routes} from "./routes";
import {LOGIN_ROUTE} from "./pagePath";
import React, {useEffect, useContext} from 'react'
import {observer} from "mobx-react-lite";
import {Context} from "./index";
import {MoonLoader} from "react-spinners";


const App = observer(() =>{

    const {login} = useContext(Context)


    useEffect(()=>{
        login.doRefresh().then(()=>{
            setTimeout(()=>{login.setFirstLoad(false)}, 500)
        }).catch(()=>{
            setTimeout(()=>{login.setFirstLoad(false)}, 500)
        })
    }, [])

    if(login.FirstLoad){
        return <div className={'background background-home center'}>
                <MoonLoader />
        </div>
    }

  return (<>

          {login.FirstLoad ? <div className={'background background-home center'}>
          <MoonLoader />
          </div>
              :
              <BrowserRouter className="App">
                  <Switch>
                      {Routes.map(({path, Component}) =>
                          <Route exact key={path} path={path} component={Component}/>
                      )}

                      <Redirect to={LOGIN_ROUTE}/>
                  </Switch>
              </BrowserRouter>
        }



      </>
  );
})

export default App;
