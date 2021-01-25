import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import { useSelector } from 'react-redux';
import { ProductItem } from '../../types';
import { store, addProduct, } from '../../Store';
import Product from './Product';

const useStyles = makeStyles((theme) => ({
    contentWrapper: {
        background: `linear-gradient(57deg, ${theme.palette.info.main} , ${theme.palette.info.dark})`,
    },
    h1: {
        fontSize: "50px",
        textAlign: "center",
        margin: "10px 0px",
        [theme.breakpoints.down("xs")]: {
            fontSize: "9vw",
        }
    },
    root: { 
        margin: theme.spacing(2, 0),
        width: "90%",
        [theme.breakpoints.down("sm")]: {
            width: "100%"
        }
    },

}));


const Index = () => {
    const classes = useStyles();
    const products = useSelector((state: ProductItem[]) => state);
    //console.log(products)
    return (
        <div className={classes.contentWrapper}>
            <h1 className={classes.h1}>Products</h1>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Grid container spacing={2} data-testid="container" className={classes.root}>
                    {products.map((product: ProductItem) => (
                        <Grid key={product.id} item xs={12} sm={6} md={4}>
                            <Product
                                id={product.id}
                                imageUrl={product.imageUrl}
                                title={product.title}
                                itemsLeft={product.itemsLeft}
                                price={product.price}
                                onClick={() => store.dispatch(addProduct(product))}
                            />
                        </Grid>
                    ))}
                </Grid>
            </div>
        </div>
    )
}
export default Index;
