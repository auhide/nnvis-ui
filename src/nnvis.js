import { useState } from 'react';
import { Toolbar } from '@material-ui/core'
import {
    Button
} from '@material-ui/core';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { 
    ArchitectureComponents, 
    DatasetsComponents 
} from './widgets/Config';

const style = {
    navbar: {
        backgroundColor: null,
        maxWidth: window.innerWidth / 2,
        marginLeft: 'auto',
        marginRight: 'auto',
        border: '2px solid #595959',
        borderStyle: 'none none solid none'
    },
    logo: {
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    button: {
        marginBottom: -30,
    }
}

export function NNVis() {

    return (
        <Router>
            <Toolbar style={style.navbar}>
                <Button style={style.button}><Link to={'/'} >Config</Link></Button>
                <Button style={style.button}><Link to={'/conv'} >Conv2D</Link></Button>
                <img style={style.logo} alt="Missing Logo" src={process.env.PUBLIC_URL + "/logo-nn.png"} />
                <Button style={style.button}><Link to={'/add-dataset'} >Add Data</Link></Button>
                <Button style={style.button}><Link to={'/datasets'} >Data</Link></Button>
            </Toolbar>

            <Switch> 

                <Route path = "/" exact>
                    <ArchitectureComponents />
                </Route>

                <Route path="/datasets" exact>
                    <DatasetsComponents />
                </Route>
            
            </Switch>
        </Router>
    );
}