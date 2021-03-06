import React from 'react';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme,) => ({
    footer: {
        width: "100%",
        height: "4.5rem",
        backgroundColor: theme.palette.info.light,

        "& p": {
            color: "black",
            fontSize: "19px",
            fontWeight: "bold",
            textAlign: "center",
            textTransform: "capitalize",
            lineHeight: "4.5rem",
        }
    }
}));

const Footer = () => {

    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            <p>developed by aqibIqbal</p>
        </footer>
    )
}
export default Footer;