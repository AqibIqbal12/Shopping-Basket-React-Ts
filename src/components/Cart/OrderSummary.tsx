import React from "react";
import Grid from "@material-ui/core/Grid";
import { Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { removeProduct, store } from "../../Store";
import { useSelector } from "react-redux";
import { ProductItem } from "../../types";


const useStyles = makeStyles((theme) => ({
  root: {
    border: `1px solid ${theme.palette.common.black}`,
    padding: theme.spacing(2),
    backgroundColor: "#64B5F7",
  },
  heading: {
    textTransform: "uppercase",
    fontWeight: "bold",
    marginBottom: theme.spacing(3),
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: theme.spacing(1),
  },

  checkoutBtn: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    backgroundColor: "#64B5F7",
    fontWeight:"bold",
    border: `1px solid ${theme.palette.common.black}`,

    "&:hover":{
       backgroundColor:theme.palette.info.main,
    }
  },
}));

const OrderSummary = () => {
  const classes = useStyles();
  const products = useSelector((state: ProductItem[]) => state);
  let numOfItems = products.filter((product) => product.added).reduce((acc, currentElem)=> (acc += currentElem.quantity!),0);
  let totalPrice = products.filter((prod) => prod.added).reduce((acc, currElem) => (acc += currElem.price * currElem.quantity!), 0);

  const handleCheckout = ()=> {
    products.filter((it)=>it.added).map((item) => store.dispatch(removeProduct(item)));
  }

  return (
    <>
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Typography variant="h5" className={classes.heading}>
            Order Summary
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.row}>
          <Typography variant="button">{numOfItems} items</Typography>
          <Typography variant="button">${totalPrice}</Typography>
        </Grid>
        <Grid item xs={12} className={classes.row}>
          <Typography variant="button">Delivery</Typography>
          <Typography variant="button">Free</Typography>
        </Grid>
        <Grid item xs={12} className={classes.row}>
          <Typography variant="button">Sales Tax</Typography>
          <Typography variant="button">-</Typography>
        </Grid>
        <Grid item xs={12} className={classes.row}>
          <Typography variant="button">Total</Typography>
          <Typography variant="button">${totalPrice}</Typography>
        </Grid>
      </Grid>
      <Button
        className={classes.checkoutBtn}
        variant="contained"
        color="default"
        fullWidth
        onClick={handleCheckout}
      >
        Checkout
      </Button>
    </>
  );
};

export default OrderSummary;
