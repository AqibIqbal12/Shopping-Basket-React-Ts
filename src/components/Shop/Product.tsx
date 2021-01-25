import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { Typography, Button } from "@material-ui/core";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

const useStyles = makeStyles((theme) => ({
    root: {
        height: "100%",
        position: "relative",
        backgroundColor: "#64B5F7",
        //backgroundColor: "green",
    },
    media: {
        height: 300,
        objectFit: "contain",
    },

    cardContent: {
        // display: "flex",
        // justifyContent: "space-between",
        marginBottom: "60px",
        //backgroundColor:"red",

        // [theme.breakpoints.only("md")]: {
        //     flexDirection: "column",

        // },
        // [theme.breakpoints.only("xs")]: {
        //     flexDirection: "column",
        // },
    },
    row: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        width: "100%",
    },

    h3ResponsiveText: {
        fontSize: "1.1rem",

        [theme.breakpoints.only("md")]: {
            fontSize: "1rem",
        },
        [theme.breakpoints.only("xs")]: {
            fontSize: "0.9rem",
        },
    },

    btnResponsiveText: {
        fontSize: "1.1rem",
        [theme.breakpoints.only("xs")]: {
            fontSize: "0.8rem",
        },
    },

    button: {
        backgroundColor: "transparent",
        padding: theme.spacing(2.5, 4),
        fontSize: "17px",
        fontWeight: "bold",
        borderTop: "1px solid black",
        border: "none",
        position: "absolute",
        bottom: 0,

        "&:hover": {
            cursor: "pointer",
            backgroundColor: theme.palette.info.main
        },

    }
}));
type ProductProps = {

    id: number;
    imageUrl: string;
    title: string;
    itemsLeft: number;
    price: number;
    onClick: () => void;
};

const Product: React.FC<ProductProps> = ({ id, title, imageUrl, itemsLeft, price, onClick }) => {
    const classes = useStyles({});
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/productDetails/${id}`);
    }


    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={imageUrl} title={title} component="img" />
            <CardContent className={classes.cardContent}>
                <div style={{ width: "100%" }}>
                    <div className={classes.row}>
                        <Typography variant="button" component="h3" className={classes.h3ResponsiveText}>
                            {title}
                        </Typography>

                        <Typography variant="button" component="h3" className={clsx(classes.h3ResponsiveText)} align="right">
                            ${price}
                        </Typography>

                    </div>

                    {itemsLeft > 0 ? (
                        <div className={classes.row} style={{ alignItems: "center" }}>
                            <Typography variant="button" component="h6" className={classes.btnResponsiveText}>
                                Items left: <strong>{itemsLeft}</strong>
                            </Typography>
                            <IconButton color="inherit" onClick={onClick} size="medium">
                                <AddShoppingCartIcon />
                            </IconButton>
                        </div>
                    ) : (
                            <Typography variant="button" color="error" component="p">
                                Out of Stock
                            </Typography>
                        )}
                </div>
            </CardContent>
            
            <Button className={classes.button} variant="contained" color="default" fullWidth onClick={handleClick}>
                View Details
            </Button>
        </Card>
    );
};

export default Product;
