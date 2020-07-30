import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addBasket } from '../actions/addAction';
import { removeBasket } from '../actions/removeAction';

import Purse1 from '../images/purse/one.jpg';
import Purse2 from '../images/purse/two.jpg';
import Purse3 from '../images/purse/three.jpg';
import Purse4 from '../images/purse/four.jpg';
import Purse5 from '../images/purse/fift.jpg';
import Purse6 from '../images/purse/sixth.jpg';
import Purse7 from '../images/purse/seven.jpg';
import Purse8 from '../images/purse/nine.jpg';
import Purse9 from '../images/purse/ten.jpg';
import Purse10 from '../images/purse/eleven.jpg';
import Purse11 from '../images/purse/twelve.jpg';
import Purse12 from '../images/purse/thirt.jpg';


const Purses = (props) => {
  console.log(props);

  //  PASS the state inside of home component, but impossible to the NavBar component
  // const [basketNumbers, setBasketNumbers] = useState(0);

  // const addToBasket = () => {
  //   setBasketNumbers(basketNumbers + 1);
  // }

  return (
    <div className="container">
      <div className="image">
        <img src={Purse1} alt="Fake Gucci Snake" />
        <h3>Fake Gucci Snake</h3>
        <h3>$1124,00</h3>
        <a onClick={() => props.addBasket('PurseSnake')} className="addToCart cart1" href="#">Add to Cart</a>
      </div>
      <div className="image">
        <img src={Purse2} alt="Fake Gucci LightGreen" />
        <h3>Fake Gucci LightGreen</h3>
        <h3>$1217,00</h3>
        <a onClick={() => props.addBasket('PurseGreen')} className="addToCart cart1" href="#">Add to Cart</a>
      </div>
      <div className="image">
        <img src={Purse3} alt="Fake Gucci White Snake" />
        <h3>Fake Gucci White Snake</h3>
        <h3>$1315,00</h3>
        <a onClick={() => props.addBasket('PurseWhiteSnake')} className="addToCart cart1" href="#">Add to Cart</a>
      </div>
      <div className="image">
        <img src={Purse4}  alt="Fake Gucci Brown" />
        <h3>Fake Gucci Brown</h3>
        <h3>$1222,00</h3>
        <a onClick={() => props.addBasket('PurseBrown')} className="addToCart cart1" href="#">Add to Cart</a>
      </div>
      <div className="image">
        <img src={Purse5}  alt="Fake Gucci White Gold" />
        <h3>Fake Gucci White Gold</h3>
        <h3>$1190,00</h3>
        <a onClick={() => props.addBasket('PurseWhiteGold')} className="addToCart cart1" href="#">Add to Cart</a>
      </div>
      <div className="image">
        <img src={Purse6} alt="Fake Gucci Red Gold" />
        <h3>Fake Gucci Red Gold</h3>
        <h3>$1217,00</h3>
        <a onClick={() => props.addBasket('PurseRedGold')} className="addToCart cart1" href="#">Add to Cart</a>
      </div>
      <div className="image">
        <img src={Purse7} alt="Fake Gucci Black Gold" />
        <h3>Fake Gucci Black Gold</h3>
        <h3>$1111,00</h3>
        <a onClick={() => props.addBasket('PurseBlackGold')} className="addToCart cart1" href="#">Add to Cart</a>
      </div>
      <div className="image">
        <img src={Purse8} alt="Fake Gucci Polka Dot Red" />
        <h3>Fake Gucci Polka Dot Red</h3>
        <h3>$1310,00</h3>
        <a onClick={() => props.addBasket('PurseDotRed')} className="addToCart cart1" href="#">Add to Cart</a>
      </div>
      <div className="image">
        <img src={Purse9} alt="Fake Gucci Black Logo" />
        <h3>Fake Gucci Black Logo</h3>
        <h3>$1221,00</h3>
        <a onClick={() => props.addBasket('PurseBlackLogo')} className="addToCart cart1" href="#">Add to Cart</a>
      </div>
      <div className="image">
        <img src={Purse10} alt="Fake Gucci Brown Logo" />
        <h3>Fake Gucci Brown Logo</h3>
        <h3>$1223,00</h3>
        <a onClick={() => props.addBasket('PurseBrownLogo')} className="addToCart cart1" href="#">Add to Cart</a>
      </div>
      <div className="image">
        <img src={Purse11} alt="Fake Gucci Pink" />
        <h3>Fake Gucci Pink</h3>
        <h3>$1329,00</h3>
        <a onClick={() => props.addBasket('PursePink')} className="addToCart cart1" href="#">Add to Cart</a>
      </div>
      <div className="image">
        <img src={Purse12} alt="Fake Gucci Gold Red" />
        <h3>Fake Gucci Gold Red</h3>
        <h3>$1228,00</h3>
        <a onClick={() => props.addBasket('PurseGoldRed')} className="addToCart cart1" href="#">Add to Cart</a>
      </div>
    </div>
  );
}

export default connect(null, { addBasket, removeBasket })(Purses);