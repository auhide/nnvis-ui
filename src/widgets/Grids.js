import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 600,
        width: 600,
        alignItems: "center",
        justify: "center",
        position: "absolute"
    },
    // control: {
    //     padding: theme.spacing(2),
    // },
}));
