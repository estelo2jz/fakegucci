import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import One from '../images/one.jpg'
import Two from '../images/two.jpg'
import Three from '../images/three.jpg'
import Four from '../images/four.jpg'
import Fift from '../images/fift.jpg'
import Sixth from '../images/sixth.jpg'
import Seven from '../images/seven.jpg'
import Eight from '../images/eight.jpg'
import Bik1 from '../images/bik1.jpg'
import Bik2 from '../images/bik2.jpg'
import Bik3 from '../images/bik3.jpg'
import Bik4 from '../images/bik4.jpg'

function Cart({basketProps}) {
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

  const productImages = [One, Two, Three, Four, Fift, Sixth, Seven, Eight, Bik1, Bik2, Bik3, Bik4];

  productsInCart = productsInCart.map((product, index) => {
    // We have access to this name, price, inCart using the map() statement
    console.log("My product is ");
    console.log(product);
    // that what were doing in down here
    return (
      // Frangment is just a placeholder rather using a div
      <Fragment>
        <div className="product">
          <ion-icon name="close-circle"></ion-icon>
          <img src={productImages[index]} />
          <span className="sm-hide">{product.name}</span>
        </div>
        <div className="price sm-hide">${product.price},00</div>
        <div className="quantity">
          <ion-icon className="decrease" name="arrow-back-circle-outline"></ion-icon>
            <span>{product.numbers}</span>
          <ion-icon className="increase" name="arrow-forward-circle-outline"></ion-icon>
        </div>
        <div className="total">${product.numbers * product.price},00</div>
      </Fragment>
    );
  });

  return (
    <div className="product-containers">
      <div className="product-header">
        <h5 className="product-title">PRODUCT</h5>
        <h5 className="price sm-hide">PRICE</h5>
        <h5 className="quantity">QUANTITY</h5>
        <h5 className="total">TOTAL</h5>
      </div> 
      <div className="products">
        {productsInCart}
      </div>
      <div className="basketTotalContainer">
        <h4 className="basketTotalTitle">{basketProps.name}</h4>
        <h4 className="basketTotal">${basketProps.cartCost},00</h4>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  basketProps: state.basketState
})

export default connect(mapStateToProps)(Cart);
