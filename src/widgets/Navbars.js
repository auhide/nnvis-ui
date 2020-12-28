import { Toolbar } from '@material-ui/core'
import {
    Button
} from '@material-ui/core';


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

export function CustomNavbar(props) {
    return (
        <Toolbar style={style.navbar}>
            <Button style={style.button}>Config</Button>
            <img style={style.logo} src={process.env.PUBLIC_URL + "/logo-nn.png"} />
            <Button style={style.button}>Data</Button>
        </Toolbar>
    )
}