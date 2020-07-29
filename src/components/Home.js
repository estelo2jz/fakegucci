import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addBasket } from '../actions/addAction';

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

const Home = (props) => {
  console.log(props);
  //  PASS the state inside of home component, but impossible to the NavBar component
  // const [basketNumbers, setBasketNumbers] = useState(0);

  // const addToBasket = () => {
  //   setBasketNumbers(basketNumbers + 1);
  // }

  return (
    <div className="container">
      <div className="image">
        <img src={One} alt="Original Gucci" />
        <h3>Fake Original Gucci</h3>
        <h3>$15,000</h3>
        <a onClick={props.addBasket} className="addToCart cart1" href="#">Add to Cart</a>
      </div>
      <div className="image">
        <img src={Two} alt="Gucci disk" />
        <h3>Fake Gucci disk</h3>
        <h3>$20,000</h3>
        <a onClick={props.addBasket} className="addToCart cart1" href="#">Add to Cart</a>
      </div>
      <div className="image">
        <img src={Three} alt="Gucci pineapple" />
        <h3>Fake Gucci pineapple</h3>
        <h3>$25,000</h3>
        <a onClick={props.addBasket} className="addToCart cart1" href="#">Add to Cart</a>
      </div>
      <div className="image">
        <img src={Four} alt="Gucci Sexiness" />
        <h3>Fake Gucci Sexiness</h3>
        <h3>$30,000</h3>
        <a onClick={props.addBasket} className="addToCart cart1" href="#">Add to Cart</a>
      </div>
      <div className="image">
        <img src={Fift} alt="logo polka dot print" />
        <h3>Fake Gucci logo polka dot print</h3>
        <h3>$35,000</h3>
        <a onClick={props.addBasket} className="addToCart cart1" href="#">Add to Cart</a>
      </div>
      <div className="image">
        <img src={Sixth} alt="logo polka dot print" />
        <h3>Fake Gucci logo polka dot print</h3>
        <h3>$40,000</h3>
        <a onClick={props.addBasket} className="addToCart cart1" href="#">Add to Cart</a>
      </div>
      <div className="image">
        <img src={Seven} alt="glitter print" />
        <h3>glitter print T-shirt</h3>
        <h3>$45,000</h3>
        <a onClick={props.addBasket} className="addToCart cart1" href="#">Add to Cart</a>
      </div>
      <div className="image">
        <img src={Eight} alt="T-shirt with GG apple" />
        <h3>Fake Gucci T-shirt with GG apple</h3>
        <h3>$50,000</h3>
        <a onClick={props.addBasket} className="addToCart cart1" href="#">Add to Cart</a>
      </div>
      <div className="image">
        <img src={Bik1} alt="logo polka dot print" />
        <h3>Fake Gucci Sparkling swimsuit</h3>
        <h3>$55,000</h3>
        <a onClick={props.addBasket} className="addToCart cart1" href="#">Add to Cart</a>
      </div>
      <div className="image">
        <img src={Bik2} alt="Sparkling swimsuit with Gucci logo" />
        <h3>Fake Gucci Sparkling swimsuit</h3>
        <h3>$60,000</h3>
        <a onClick={props.addBasket} className="addToCart cart1" href="#">Add to Cart</a>
      </div>
      <div className="image">
        <img src={Bik3} alt="Stretch fabric swimsuit with Gucci" />
        <h3>Stretch fabric swimsuit with Gucci</h3>
        <h3>$65,000</h3>
        <a onClick={props.addBasket} className="addToCart cart1" href="#">Add to Cart</a>
      </div>
      <div className="image">
        <img src={Bik4} alt="Disney x Gucci swimsuit" />
        <h3>Fake Gucci Disney x Gucci swimsuit</h3>
        <h3>$70,000</h3>
        <a onClick={props.addBasket} className="addToCart cart1" href="#">Add to Cart</a>
      </div>
    </div>
  );
}

export default connect(null, { addBasket })(Home);