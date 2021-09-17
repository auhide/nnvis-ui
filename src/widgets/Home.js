
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: window.screen.availWidth
    },
    firstPaper: {
        alignItems: "center",
        justify: "center",
        backgroundColor: "blue"
    },
}));


export function Home({  }) { 
    const classes = useStyles();

    return <>
        <Grid container className={classes.root} spacing={1}>
            <Grid item xs={12} className={classes.firstPaper}>
                <h1>Welcome to Neuroad!</h1>
            </Grid>
        </Grid>
    </>
}