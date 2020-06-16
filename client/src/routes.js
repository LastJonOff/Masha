import React from "react"
import {Switch, Route} from 'react-router-dom'
import {SongsPage} from "./pages/SongsPage";
import {CreatePage} from "./pages/CreatePage";
import {DetailPage} from "./pages/DetailPage";
import {MainPage} from "./pages/MainPage";
export const useRoutes = () =>{
        return(
            <Switch>
                <Route path ="/" exact>
                    <MainPage/>
                </Route>
                <Route path = "/songs" exact>
                    <SongsPage />
                </Route>
                <Route path = "/create" exact>
                    <CreatePage />
                </Route>
                <Route path = "/detail/:id">
                    <DetailPage />
                </Route>

            </Switch>
        )
}