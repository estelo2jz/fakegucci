import { REMOVE_PRODUCT_BASKET } from './types';

export const removeBasket = () => {
  return (dispatch) => {
    console.log("Removing from Basket!");
    dispatch({
      type: REMOVE_PRODUCT_BASKET
    });
  }
}