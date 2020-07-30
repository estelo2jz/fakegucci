import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getNumbers } from '../actions/getAction';
import { Link } from 'react-router-dom';


function NavBar(props) {
  console.log(props)

  useEffect(() => {
    getNumbers();
  }, []);
  
  return (
    <header>
      <div className="overlay"></div>
      <nav>
        {/* <h2>FAKE GUCCI STORE</h2> */}
        <ul>
          <li className="nav-home">
            <Link to="/">Clothing</Link>
          </li>
          <li className="nav-home">
            <Link to="/purses">Purses</Link>
          </li>
          <li className="nav-about">
            <Link to="/about">About</Link>
          </li>
          <li className="cart">
            <Link to="/cart">
              <ion-icon name="basket-outline"></ion-icon>Cart <span>{props.basketProps.basketNumbers}</span>
            </Link>
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