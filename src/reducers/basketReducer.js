import { ADD_PRODUCT_BASKET, GET_NUMBERS_BASKET, REMOVE_PRODUCT_BASKET } from "../actions/types";

const initialState = {
  basketNumbers: 0,
  cartCost: 0,
  products: {
    OriginalGucci: {
      name: "Fake Original Gucci",
      price: 124.00,
      numbers: 0,
      inCart: false,
    },
    GucciDisk: {
      name: "Fake Gucci Disk",
      price: 217.00,
      numbers: 0,
      inCart: false
    },
    Guccipineapple: {
      name: "Fake Gucci Pineapple",
      price: 315.00,
      numbers: 0,
      inCart: false
    },
    GucciSexiness: {
      name: "Fake Gucci Sexiness",
      price: 222.00,
      numbers: 0,
      inCart: false
    },
    PolkaDotWhite: {
      name: "Fake Gucci Polka Dot White",
      price: 190.00,
      numbers: 0,
      inCart: false
    },
    PolkaDotBlack: {
      name: "Fake Gucci Polka Dot Black",
      price: 517.00,
      numbers: 0,
      inCart: false
    },
    GlitterPrint: {
      name: "Fake Gucci Glitter T-shirt",
      price: 111.00,
      numbers: 0,
      inCart: false
    },
    WithApple: {
      name: "Fake Gucci GG Apple T-shirt",
      price: 310.00,
      numbers: 0,
      inCart: false
    },
    RedSwimsuit: {
      name: "Fake Gucci Sparkling Red Swimsuit",
      price: 221.00,
      numbers: 0,
      inCart: false
    },
    BlackSwimsuit: {
      name: "Fake Gucci Sparkling Black Swimsuit",
      price: 423.00,
      numbers: 0,
      inCart: false
    },

    GoldSwimsuit: {
      name: "Fake Gucci Stretch Gold Swimsuit",
      price: 529.00,
      numbers: 0,
      inCart: false
    },
    WhiteSwimsuit: {
      name: "Fake Gucci Disney x Gucci Swimsuit",
      price: 628.00,
      numbers: 0,
      inCart: false
    },

    // PURSES STATE
    PurseSnake: {
      name: "Fake Gucci Snake",
      price: 1124,
      numbers: 0,
      inCart: false
    },
    PurseGreen: {
      name: "Fake Gucci LightGreen",
      price: 1217,
      numbers: 0,
      inCart: false
    },
    PurseWhiteSnake: {
      name: "Fake Gucci White Snake",
      price: 1315,
      numbers: 0,
      inCart: false
    },
    PurseBrown: {
      name: "Fake Gucci Brown",
      price: 1222,
      numbers: 0,
      inCart: false
    },
    PurseWhiteGold: {
      name: "Fake Gucci White Gold",
      price: 1190,
      numbers: 0,
      inCart: false
    },
    PurseRedGold: {
      name: "Fake Gucci Red Gold",
      price: 1217,
      numbers: 0,
      inCart: false
    },



    PurseBlackGold: {
      name: "Fake Gucci Black Gold",
      price: 1111,
      numbers: 0,
      inCart: false
    },
    PurseDotRed: {
      name: "Fake Gucci Polka Dot Red",
      price: 1310,
      numbers: 0,
      inCart: false
    },
    PurseBlackLogo: {
      name: "Fake Gucci Black Logo",
      price: 1221,
      numbers: 0,
      inCart: false
    },
    PurseBrownLogo: {
      name: "Fake Gucci Brown Logo",
      price: 1223,
      numbers: 0,
      inCart: false
    },
    PursePink: {
      name: "Fake Gucci Pink",
      price: 1329,
      numbers: 0,
      inCart: false
    },
    PurseGoldRed: {
      name: "Fake Gucci Gold Red",
      price: 1228,
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