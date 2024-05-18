import React, { useContext } from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import {Context} from "../index";
import {authRouts, publicRouts} from "../routes";
import {WELCOME_ROUTE} from "../utils/consts";


const AppRouter = () => {
    const {user} = useContext(Context)
    console.log(user)
    return (
        <Routes>
            {user.isAuth && authRouts.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} exact/>
            )}

            {publicRouts.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} exact/>
            )}

            <Route path='*' element={<Navigate to={WELCOME_ROUTE}/>} />
        </Routes>
    );
};

export default AppRouter;