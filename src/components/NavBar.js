import React, { useContext } from "react";
import { Context } from "..";
import { NavLink } from "react-router-dom";
import {observer} from 'mobx-react-lite'
import { useNavigate } from 'react-router-dom';
import {ADMIN_ROUTE, HOME_ROUTE, LOGIN_ROUTE} from "../utils/consts";
// import {Button, Container, Nav, Navbar} from "react-bootstrap";
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
                <NavLink style={{color:"white"}} to={HOME_ROUTE}> FinApp</NavLink>
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