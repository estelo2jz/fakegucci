import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addBasket } from '../actions/addAction';
import { removeBasket } from '../actions/removeAction';

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
        <h3>$12,00</h3>
        <a onClick={() => props.addBasket('OriginalGucci')} className="addToCart cart1" href="#">Add to Cart</a>
      </div>
      <div className="image">
        <img src={Two} alt="Gucci disk" />
        <h3>Fake Gucci Disk</h3>
        <h3>$17,00</h3>
        <a onClick={() => props.addBasket('GucciDisk')} className="addToCart cart1" href="#">Add to Cart</a>
      </div>
      <div className="image">
        <img src={Three} alt="Gucci pineapple" />
        <h3>Fake Gucci Pineapple</h3>
        <h3>$15,00</h3>
        <a onClick={() => props.addBasket('Guccipineapple')} className="addToCart cart1" href="#">Add to Cart</a>
      </div>
      <div className="image">
        <img src={Four} alt="Gucci Sexiness" />
        <h3>Fake Gucci Sexiness</h3>
        <h3>$22,00</h3>
        <a onClick={() => props.addBasket('GucciSexiness')} className="addToCart cart1" href="#">Add to Cart</a>
      </div>
      <div className="image">
        <img src={Fift} alt="logo polka dot print" />
        <h3>Fake Gucci Polka Dot White</h3>
        <h3>$23,00</h3>
        <a onClick={() => props.addBasket('PolkaDotWhite')} className="addToCart cart1" href="#">Add to Cart</a>
      </div>
      <div className="image">
        <img src={Sixth} alt="logo polka dot print" />
        <h3>Fake Gucci Polka Dot Black</h3>
        <h3>$17,00</h3>
        <a onClick={() => props.addBasket('PolkaDotBlack')} className="addToCart cart1" href="#">Add to Cart</a>
      </div>
      <div className="image">
        <img src={Seven} alt="glitter print" />
        <h3>Fake Gucci Glitter T-shirt</h3>
        <h3>$11,00</h3>
        <a onClick={() => props.addBasket('GlitterPrint')} className="addToCart cart1" href="#">Add to Cart</a>
      </div>
      <div className="image">
        <img src={Eight} alt="T-shirt with GG apple" />
        <h3>Fake Gucci GG Apple T-shirt</h3>
        <h3>$10,00</h3>
        <a onClick={() => props.addBasket('WithApple')} className="addToCart cart1" href="#">Add to Cart</a>
      </div>
      <div className="image">
        <img src={Bik1} alt="Sparkling swimsuit" />
        <h3>Fake Gucci Sparkling Red Swimsuit</h3>
        <h3>$21,00</h3>
        <a onClick={() => props.addBasket('RedSwimsuit')} className="addToCart cart1" href="#">Add to Cart</a>
      </div>
      <div className="image">
        <img src={Bik2} alt="Sparkling swimsuit with Gucci logo" />
        <h3>Fake Gucci Sparkling Black Swimsuit</h3>
        <h3>$23,00</h3>
        <a onClick={() => props.addBasket('BlackSwimsuit')} className="addToCart cart1" href="#">Add to Cart</a>
      </div>
      <div className="image">
        <img src={Bik3} alt="Stretch fabric swimsuit with Gucci" />
        <h3>Fake Gucci Stretch  Gold Swimsuit</h3>
        <h3>$29,00</h3>
        <a onClick={() => props.addBasket('GoldSwimsuit')} className="addToCart cart1" href="#">Add to Cart</a>
      </div>
      <div className="image">
        <img src={Bik4} alt="Disney x Gucci swimsuit" />
        <h3>Fake Gucci Disney x Gucci Swimsuit</h3>
        <h3>$28,00</h3>
        <a onClick={() => props.addBasket('WhiteSwimsuit')} className="addToCart cart1" href="#">Add to Cart</a>
        {/* <a onClick={props.removeBasket} >Remove Item</a> */}
      </div>
    </div>
  );
}

export default connect(null, { addBasket, removeBasket })(Home);