import React, { FC } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import CancelIcon from "@material-ui/icons/Cancel";
import IconButton from "@material-ui/core/IconButton";
import clsx from "clsx";
import { store, removeProduct } from "../../Store";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: 200,
    width: "100%",
    marginBottom:"5px",
    border: `1px solid ${theme.palette.common.black}`,
    position: "relative",
    backgroundColor: "#64B5F7",

    [theme.breakpoints.only("xs")]: {
      border: "none",
      backgroundColor: theme.palette.background.default,
      minHeight: 150,
    },
  },
  media: {
    width: "100%",
    height: "100%",
    objectFit:"contain",

    [theme.breakpoints.only("xs")]: {
      height: "60%",
    },
  },
  content: {
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  bottomRow: {
    display: "flex",
    justifyContent: "space-between",

    [theme.breakpoints.only("xs")]: {
      color: "black",
    },
  },

  responsiveText: {
    color:"black",
    fontSize: "1.2rem",

    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
    },
  },

  blackOnXS: {
    [theme.breakpoints.down("xs")]: {
      color: theme.palette.text.primary,
      fontWeight: "bolder",
    },
  },

  cancelBtn: {
    position: "absolute",
    fontSize: "2rem",
    right: 2,
    top: 2,
  },
}));

type CartItemProps = {
  id: number;
  title: string;
  imageUrl: string;
  price: number;
  qty: number | undefined;
};

  const CartItems: FC<CartItemProps> = ( {id, title, imageUrl, price, qty}) => {
  const classes = useStyles();
  
  return (
    <Grid container className={classes.root}>

      <IconButton color="inherit" className={classes.cancelBtn} onClick={() => store.dispatch(removeProduct({ id }))}>
        <CancelIcon />
      </IconButton>
      <Grid item xs={4}>
        <CardMedia className={classes.media} image={imageUrl} title={title} component="img"/>
      </Grid>

      <Grid item xs={8} className={classes.content}>
        <div>
          <Typography variant="h6" component="h3" color="textSecondary" className={classes.responsiveText}>
            NAME: {title}
          </Typography>
        </div>
        <div className={classes.bottomRow}>
          <Typography
            variant="button"
            color="textSecondary"
            className={clsx(classes.responsiveText, classes.blackOnXS)}
          >
            Price: ${price}
          </Typography>
          <Typography
            variant="button"
            color="textSecondary"
            className={clsx(classes.responsiveText, classes.blackOnXS)}
          >
            Qty: {qty}
          </Typography>
          
        </div>
        <Typography
        variant="button"
        color="textSecondary"
        className={clsx(classes.responsiveText, classes.blackOnXS)}
        style={{textAlign:"center"}}
          >
            SubTotal: ${price * qty!}
          </Typography>
      </Grid>
    </Grid>
  );
};
export default CartItems;
