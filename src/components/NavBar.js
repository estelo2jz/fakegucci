import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getNumbers } from '../actions/getAction';

function NavBar(props) {
  console.log(props)

  useEffect(() => {
    getNumbers();
  }, []);
  
  return (
    <header>
      <div className="overlay"></div>
      <nav>
        <h2>FAKE GUCCI STORE</h2>
        <ul>
          <li className="nav-home">
            <a href="#">Home</a>
          </li>
          <li className="nav-about">
            <a href="#">About</a>
          </li>
          <li className="cart">
            <a href="#">
              <ion-icon name="basket-outline"></ion-icon>Cart <span>{props.basketProps.basketNumbers}</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

const mapStateToProps = state => ({
  basketProps: state.basketState
})

export default connect(mapStateToProps, { getNumbers })(NavBar);