import React, { Component } from 'react';
import ProductList from './ecomm/ProductList';
import ShoppingCart from './ecomm/ShoppingCart';
import Other from './ecomm/Other';
import Grid from 'material-ui/Grid';


class EComm extends Component {
  render() {
    return (
      <div>
        <div>
        <Grid container >
              <div>
              <ProductList />
              </div>
              <div>
              <ShoppingCart />
              </div>
              <div>
              <Other />
              </div>  
          </Grid>
        </div>
      </div>
    );
  }
}

export default EComm;