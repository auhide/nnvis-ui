import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { 
    ArchitectureComponents, 
    DatasetsComponents 
} from './widgets/Config';
import {
    Learn
} from './widgets/Learn';


export function NNVis() {

    return (
        <Router>
            <ul class="navbar">
                <li className="mainText navbarTab"><Link to={'/'} ><b>Learn</b></Link></li>
                <li className="mainText navbarTab"><Link to={'/config'} ><b>Config</b></Link></li>
                <li className="mainText navbarTab"><Link to={'/datasets'} ><b>Data</b></Link></li>
            </ul>

            <Switch> 
                <Route path="/" exact>
                    <Learn />
                </Route>

                <Route path = "/config" exact>
                    <ArchitectureComponents />
                </Route>

                <Route path="/datasets" exact>
                    <DatasetsComponents />
                </Route>
            
            </Switch>
        </Router>
    );
}