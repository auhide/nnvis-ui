import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: window.innerWidth,
        width: "45%",
        alignItems: "center",
        justify: "center"
    },
    control: {
        padding: theme.spacing(2),
    },
}));
