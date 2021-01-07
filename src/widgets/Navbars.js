import { Toolbar } from '@material-ui/core'
import {
    Button
} from '@material-ui/core';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { ArchitectureComponents } from './Config';
import { useState } from 'react';

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
    const [architecture, setArchitecture] = useState({
        1: 2,
        2: 3,
        3: 0,
        4: 0,
        5: 0,
        6: 0
      });
    
      const [params, setParams] = useState({
        "optimization": "sgd",
        "hyperparameters": {
          "epochs": 1,
          "learning_rate": 0.1,
          "activation": "sigm",
          "batch": 5,
          "random": 0,
          
          "momentum": 0.1,
          "epsilon": 0.01,
          "beta1": 0.9,
          "beta2": 0.999
        }
      })

    const [evaluationResult, setEvaluationResult] = useState({});

    // Loaders
    const [evalIsLoading, setEvalIsLoading] = useState(null);
    const [trainButton, trainButtonSetter] = useState(null);

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
                <Route path = "/" exact><ArchitectureComponents 
                                architecture={architecture} setter={setArchitecture} 
                                params={params} hsetter={setParams} 
                                result={evaluationResult} rsetter={setEvaluationResult}
                                evalLoad={evalIsLoading} evalLoadSetter={setEvalIsLoading}
                                trainButton={trainButton} trainButtonSetter={trainButtonSetter} /></Route>
                {/* <Route path = "/datasets" component={ArchitectureComponents}></Route>
                <Route path = "/conv" component={ArchitectureComponents}></Route> */}
            </Switch>
        </Router>
    // <ArchitectureComponents 
    //                             architecture={architecture} setter={setArchitecture} 
    //                             params={params} hsetter={setParams} />

    )
}