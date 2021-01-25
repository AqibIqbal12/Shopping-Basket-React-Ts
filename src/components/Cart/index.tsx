import React from "react";
import CartItemCard from "./CartItemCard";
import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import { ProductItem } from "../../types";
import OrderSummary from "./OrderSummary";

const useStyles = makeStyles((theme) => ({
  container: {
    background: `linear-gradient(57deg, ${theme.palette.info.main} , ${theme.palette.info.dark})`,
    flexGrow: 1,
      
  },
  root: {
    flexGrow: 10,
    margin: theme.spacing(2, "auto"),
  },
  heading: {
    textTransform: "uppercase",
    fontWeight: "bold",
    marginTop: theme.spacing(4),

  },

  total: {
    marginBottom: theme.spacing(4),
  },
}));

const CartItemList = () => {

  const classes = useStyles();
  const products = useSelector((state: ProductItem[]) => state);
  
  return (
    <>
      {products.filter((product) => product.added).length > 0 ? (
        <div className={classes.container}>
          <Container className={classes.root}>
            <Typography variant="h4" component="h4" className={classes.heading}>
              Your cart
      </Typography>
            <Typography variant="button" component="p" className={classes.total}>
              Total:
          <strong>
                ${
                  products.filter((prod) => prod.added).reduce((acc, currElem) => (acc += currElem.price * currElem.quantity!), 0)
                }
              </strong>
            </Typography>

            <Grid container spacing={4}>
              <Grid item xs={12} md={8} style={{ padding: 10 }}>
                {
                  products.filter((product) => product.added).map((product) => (
                    <CartItemCard
                      key={product.id}
                      id={product.id}
                      imageUrl={product.imageUrl}
                      title={product.title}
                      price={product.price}
                      qty={product.quantity} />

                  ))
                }
              </Grid>
              <Grid item xs={12} md={4} style={{ padding: 10 }}>
                <OrderSummary />
              </Grid>
            </Grid>
          </Container>

        </div>
      )
        : (
          <div style={{ textAlign:"center", }}>
            <Typography style={{ color: "white", fontWeight:"bold", fontSize:"25px" }} variant="body1" component="p">
              Cart is empty
          </Typography>
          </div>
        )
      }
    </>
    );
};

export default CartItemList;
