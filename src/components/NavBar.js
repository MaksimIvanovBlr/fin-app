import React, { useContext } from "react";
import { Context } from "..";
import {observer} from 'mobx-react-lite'
import { useNavigate } from 'react-router-dom';
import {ADMIN_ROUTE, DAILY_ROUTE, HOME_ROUTE, LOGIN_ROUTE, USER_SETTINGS_ROUTE} from "../utils/consts";
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav'

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }


    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <h1 style={{color:"yellow"}}><strong>FinApp</strong></h1>
                <Button className='m-lg-2' variant={'outline-light'} onClick={() =>navigate(HOME_ROUTE)}>HOME</Button>
                <Button className='m-lg-2' variant={'outline-light'} onClick={() =>navigate(USER_SETTINGS_ROUTE)}>USER SETTINGS</Button>
                <Button className='m-lg-2' variant={'outline-light'} onClick={() =>navigate(DAILY_ROUTE)}>DAILY</Button>
                {user.isAuth ?
                    <Nav className="le-auto">
                        <Button className='m-lg-2' variant={'outline-light'} onClick={() => logOut()}>Log out</Button>
                        <Button className='m-lg-2' variant={'outline-light'} onClick={() => navigate(ADMIN_ROUTE)}>Admin panel</Button>

                    </Nav>
                    :
                    <Nav className="le-auto">
                        <Button  className="m-lg-2" variant={'outline-light'} onClick={() => navigate(LOGIN_ROUTE)}>Authorization</Button>
                    </Nav>
                }

            </Container>
        </Navbar>
    )
})

export default NavBar;