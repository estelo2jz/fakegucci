import { ADD_PRODUCT_BASKET, GET_NUMBERS_BASKET, REMOVE_PRODUCT_BASKET } from "../actions/types";

const initialState = {
  basketNumbers: 0,
  cartCost: 0,
  products: {
    OriginalGucci: {
      name: "Fake Original Gucci",
      price: 12.00,
      numbers: 0,
      inCart: false,
    },
    GucciDisk: {
      name: "Fake Gucci Disk",
      price: 17.00,
      numbers: 0,
      inCart: false
    },
    Guccipineapple: {
      name: "Fake Gucci Pineapple",
      price: 15.00,
      numbers: 0,
      inCart: false
    },
    GucciSexiness: {
      name: "Fake Gucci Sexiness",
      price: 22.00,
      numbers: 0,
      inCart: false
    },
    PolkaDotWhite: {
      name: "Fake Gucci Polka Dot White",
      price: 23.00,
      numbers: 0,
      inCart: false
    },
    PolkaDotBlack: {
      name: "Fake Gucci Polka Dot Black",
      price: 17.00,
      numbers: 0,
      inCart: false
    },
    GlitterPrint: {
      name: "Fake Gucci Glitter T-shirt",
      price: 11.00,
      numbers: 0,
      inCart: false
    },
    WithApple: {
      name: "Fake Gucci GG Apple T-shirt",
      price: 10.00,
      numbers: 0,
      inCart: false
    },
    RedSwimsuit: {
      name: "Fake Gucci Sparkling Red Swimsuit",
      price: 21.00,
      numbers: 0,
      inCart: false
    },
    BlackSwimsuit: {
      name: "Fake Gucci Sparkling Black Swimsuit",
      price: 23.00,
      numbers: 0,
      inCart: false
    },

    GoldSwimsuit: {
      name: "Fake Gucci Stretch Gold Swimsuit",
      price: 29.00,
      numbers: 0,
      inCart: false
    },
    WhiteSwimsuit: {
      name: "Fake Gucci Disney x Gucci Swimsuit",
      price: 28.00,
      numbers: 0,
      inCart: false
    },
  }
}

export default (state = initialState, action) => {
  switch(action.type) {
    case ADD_PRODUCT_BASKET:
      let addQuantity = { ...state.products[action.payload] }
      addQuantity.numbers += 1;
      addQuantity.inCart = true;
      console.log(addQuantity);

      return {
        ...state,
        basketNumbers: state.basketNumbers + 1,
        cartCost: state.cartCost + state.products[action.payload].price,
        products: {
          ...state.products,
          [action.payload]: addQuantity
        }
      }
    case GET_NUMBERS_BASKET:
      return {
        ...state
      }
    case REMOVE_PRODUCT_BASKET:
      return {
        basketNumbers: state.basketNumbers - 1
      }
    default: 
      return state;
  }
}