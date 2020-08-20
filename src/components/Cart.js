import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { productQuantity } from '../actions/productQuantity';

import originalGucci from '../images/one.jpg';
import gucciDisk from '../images/two.jpg';
import gucciPineapple from '../images/three.jpg';
import gucciSexiness from '../images/four.jpg';
import gucciPolkaDotWhite from '../images/sixth.jpg';
import gucciPolkaDotBlack from '../images/fift.jpg';
import GlitterPrint from '../images/seven.jpg';
import WithApple from '../images/eight.jpg';
import gucciSparklingRed from '../images/bik1.jpg';
import gucciSparklingBlack from '../images/bik2.jpg';
import gucciStretchGold from '../images/bik3.jpg';
import gucciDisney from '../images/bik4.jpg';

function Cart({basketProps, productQuantity}) {
  console.log(basketProps);

  let productsInCart = [];
 
  Object.keys(basketProps.products).forEach( function(item) {
    console.log(item);
    console.log(basketProps.products[item].inCart);
    if(basketProps.products[item].inCart) {
      productsInCart.push(basketProps.products[item])
    }
    console.log(productsInCart);
  })

  // const productImages = [One, Two, Three, Four, Fift, Sixth, Seven, Eight, Bik1, Bik2, Bik3, Bik4];
  const productImages = (product) => {
    if (product.tagName === 'originalGucci') {
      return originalGucci;
    } else if(product.tagName === 'gucciDisk') {
      return gucciDisk;
    } else if(product.tagName === 'gucciPineapple') {
      return gucciPineapple;
    } else if(product.tagName === 'gucciSexiness') {
      return gucciSexiness;
    } else if(product.tagName === 'gucciPolkaDotWhite') {
      return gucciPolkaDotWhite;
    } else if(product.tagName === 'gucciPolkaDotBlack') {
      return gucciPolkaDotBlack;
    } else if(product.tagName === 'gucciGlitter') {
      return GlitterPrint;
    } else if(product.tagName === 'gucciApple') {
      return WithApple;
    } else if(product.tagName === 'gucciSparklingRed') {
      return gucciSparklingRed;
    } else if(product.tagName === 'gucciSparklingBlack') {
      return gucciSparklingBlack;
    } else if(product.tagName === 'gucciStretchGold') {
      return gucciStretchGold;
    } else if(product.tagName === 'gucciDisney') {
      return gucciDisney;
    }
  }

  productsInCart = productsInCart.map( (product, index) => {
    console.log("My product is");
    console.log(product);
    return (
        <Fragment key={index}>
        
            <div className="product"><ion-icon name="close-circle"></ion-icon><img src={productImages(product)} />
                <span className="sm-hide">{product.name}</span>
            </div>
            <div className="price sm-hide">${product.price},00</div>
            <div className="quantity">
                <ion-icon onClick={() => productQuantity('decrease', product.tagName)} className="decrease" name="arrow-back-circle-outline"></ion-icon>
                    <span>{product.numbers}</span>
                <ion-icon onClick={() => productQuantity('increase', product.tagName)} className="increase" name="arrow-forward-circle-outline"></ion-icon>   
            </div>
            <div className="total">${product.numbers * product.price},00</div>
        </Fragment>
    )
});

return (
    <div className="container-products">
        <div className="product-header">
            <h5 className="product-title">PRODUCT</h5>
            <h5 className="price sm-hide">PRICE</h5>
            <h5 className="quantity">QUANTITY</h5>
            <h5 className="total">TOTAL</h5>
        </div>
        <div className="products">
            { productsInCart }
        </div>
        <div className="basketTotalContainer">
            <h4 className="basketTotalTitle">Basket Total</h4>
            <h4 className="basketTotal">{basketProps.cartCost},00</h4>
        </div>
    </div>
)
}

const mapStateToProps = state => ({
basketProps: state.basketState
});


export default connect(mapStateToProps, { productQuantity } )(Cart);

