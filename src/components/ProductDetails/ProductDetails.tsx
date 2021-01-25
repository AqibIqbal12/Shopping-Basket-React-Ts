import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Grid, Container, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { useSelector } from "react-redux";
import { ProductItem } from "../../types";
import { addProduct, store } from "../../Store";
import Rating from "@material-ui/lab/Rating";

const useStyles = makeStyles((theme) => ({
  contentWrapper:{
    flexGrow:1,
  },
  container: {
    padding: theme.spacing(2),
    flexGrow: 10,

    [theme.breakpoints.down("md")]: {
      width: "90%",
    },
  },
  image: {
    width: "100%",
    height: "auto",
  },
  button: {
    marginTop: theme.spacing(5),
    backgroundColor:"#64B5F7",

    "&:hover":{
      backgroundColor:theme.palette.info.main,
   }
  },
  name: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.6rem",
    },
  },
}));

const ProductDetailPage = () => {

  const classes = useStyles();
  const { id } = useParams();
  const products = useSelector((state: ProductItem[]) => state);
  const [rating] = useState(3.5);

  const product = products.find((p) => p.id === parseInt(id));
  //console.log(product)
  
  if (!product) return <p>Product not found</p>;

  return (
    <div className={classes.contentWrapper}>
    <Container className={classes.container}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <img className={classes.image} src={product.imageUrl} alt={product.title}/>
        </Grid>
        <Grid item xs={12} md={6} container direction="column">
          <Grid item >
            <Typography variant="h4" className={classes.name}>
              {product.title}
            </Typography>
          </Grid>
          <Grid item container justify="center" spacing={1} style={{ marginTop: 20 }}>
            <Grid item xs={6}>
              <Typography variant="button">Price</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="button"> ${product.price}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="button">Items left</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="button">{product.itemsLeft}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="button">Rating</Typography>
            </Grid>
            <Grid item xs={6}>
              <Rating value={rating} precision={0.5} readOnly />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="button">Description</Typography>
            </Grid>
            <Grid item xs={6} style={{textAlign:"justify"}}>
              <Typography variant="button">{product.description}</Typography>
            </Grid>
          </Grid>
          <Grid item container>
            <Button
              variant="contained"
              className={classes.button}
              startIcon={<AddShoppingCartIcon />}
              onClick={() => store.dispatch(addProduct(product))}
              disabled={product.itemsLeft === 0}
              fullWidth
            >
              Add to cart
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
    </div>
  );
};

export default ProductDetailPage;
