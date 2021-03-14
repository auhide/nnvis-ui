import { Toolbar } from '@material-ui/core'
import {
    Button
} from '@material-ui/core';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { 
    ArchitectureComponents, 
    DatasetsComponents 
} from './widgets/Config';


export function NNVis() {

    return (
        <Router>
            <ul>
                <li className="mainText"><Link to={'/'} >Config</Link></li>
                <li className="mainText"><Link to={'/conv'} >Conv2D</Link></li>
                <li className="mainText"><Link to={'/preprocess'} >Preprocess</Link></li>
                <li className="mainText"><Link to={'/datasets'} >Data</Link></li>
            </ul>

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