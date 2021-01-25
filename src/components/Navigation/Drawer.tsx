import React, { FC } from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
//import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";

import { NavLink, useNavigate } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    drawerPaper: {
        width: 240,
        backgroundColor: theme.palette.info.light,
    },
    navLink: {
        textDecoration: "none",
        color: theme.palette.common.black,
        fontWeight: "bold",
        fontSize: "20px",

        "&:hover": {
            cursor: "pointer",
            color:theme.palette.common.white
        },
    },
    active: {
        color:theme.palette.common.white
    },

}));

type RightDrawerProps = {
    open: boolean;
    onClickHandler: () => void;
};

const RightDrawer: FC<RightDrawerProps> = ({ open, onClickHandler }) => {
    const classes = useStyles();
    const navigate = useNavigate();

    return (
        <Drawer variant="temporary" anchor="right" open={open} classes={{ paper: classes.drawerPaper }} onClick={onClickHandler}>
            <List>
                    <ListItem button onClick={() => navigate("/")} style={{ borderBottom: "1px solid black", }}>
                        {/* <ListItemText primary="Home" /> */}
                        <NavLink to="/" className={classes.navLink} activeClassName={classes.active} end={true}>
                            Home
                       </NavLink>
                    </ListItem>
                    <ListItem button onClick={() => navigate("/shop")}>
                        {/* <ListItemText primary="Shop" /> */}
                        <NavLink to="/shop" className={classes.navLink} activeClassName={classes.active} end={true}>
                            Shop
                       </NavLink>
                    </ListItem>
            </List>
        </Drawer>
    );
}
export default RightDrawer;
