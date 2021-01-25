import React, { FC } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { NavLink, useNavigate } from "react-router-dom";
import { Hidden } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { ProductItem } from '../../types';


const useStyles = makeStyles((theme) => ({
    navigationContainer: {
        backgroundColor: theme.palette.info.light,
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        padding: theme.spacing(0, 2),
        position: "sticky",
        top: 0,
        zIndex: theme.zIndex.appBar,

        [theme.breakpoints.only("xs")]:{
            flexDirection:"column",
        },
    },
    leftContainer: {
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.only("xs")]:{
            flexDirection:"column",
        },

        "& p":{
            fontSize: "30px",
            [theme.breakpoints.only("xs")]:{
                fontSize: "6vw",
            },
        }
    },
    rightContainer: {
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.only("xs")]:{
            justifyContent:"space-between",
        },
    },
    linkscontainer: {
        display: "flex",
        [theme.breakpoints.down("sm")]: {
            display: "none",
        },
    },
    navLink: {
        padding: theme.spacing(3),
        borderBottom: "1px solid #648AC8",
        textDecoration: "none",
        color: theme.palette.common.black,
        fontWeight: "bold",
        fontSize: "20px",

        "&:hover": {
            cursor: "pointer",
            backgroundColor: theme.palette.info.main,
        },
    },
    active: {
        backgroundColor: theme.palette.info.main,
    },
    iconButton: {
        position: "relative",
    },
    icon: {
        color: theme.palette.common.black,
    },
    dot: {
        position: "absolute",
        top: 0,
        right: 0,
        backgroundColor: theme.palette.info.dark,
        borderRadius: "50%",
        width: "18px",
        height: "18px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    cartItemText: {
        color: theme.palette.common.white,
        fontSize: "14",
        fontWeight: "bold",
    },
    menuButton: {
        color: theme.palette.primary.contrastText,
        marginRight: "0px",
    },
}));

type NavBarProps = {
    onMenuClickHandler: () => void;
};


const NavBar: FC<NavBarProps> = ({ onMenuClickHandler }) => {
    const classes = useStyles();
    const navigate = useNavigate();
    const products = useSelector((state: ProductItem[]) => state);
    
    return (
        <div className={classes.navigationContainer}>
            <div className={classes.leftContainer}>
                <p>🆂🅷🅾🅿🅿🅸🅽🅶 🅱🅰🆂🅺🅴🆃</p>
            </div>
            <div className={classes.rightContainer}>
                <div className={classes.linkscontainer}>
                    <NavLink to="/" className={classes.navLink} activeClassName={classes.active} end={true}>
                        Home
                    </NavLink>
                    <NavLink to="/shop" className={classes.navLink} activeClassName={classes.active} end={true}>
                        Shop
                    </NavLink>
                </div>
                <IconButton className={classes.iconButton} onClick={() => navigate("/cart")}>
                    {products.filter((elem)=> elem.added).length > 0 && 
                    <div className={classes.dot}>
                        <Typography className={classes.cartItemText}>
                            {
                                products.filter((product) => product.added).reduce((acc, currentElem)=> (acc += currentElem.quantity!),0)
                            }
                        </Typography>
                    </div>  
                    }
                    <ShoppingCartIcon className={classes.icon} />
                    
                </IconButton>
                <Hidden mdUp>
                    <IconButton className={classes.menuButton} edge="end" aria-label="menu" onClick={onMenuClickHandler}>
                        <MenuIcon fontSize="large" />
                    </IconButton>
                </Hidden>
            </div>
        </div>
    )
}
export default NavBar;
