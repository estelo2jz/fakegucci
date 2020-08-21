import { 
  ADD_PRODUCT_BASKET, 
  GET_NUMBERS_BASKET, 
  INCREASE_QUANTITY, 
  DECREASE_QUANTITY 
} from "../actions/types";

const initialState = {
  basketNumbers: 0,
  cartCost: 0,
  products: {
    OriginalGucci: {
      name: "Fake Original Gucci",
      tagName: 'originalGucci',
      price: 124.00,
      numbers: 0,
      inCart: false,
    },
    GucciDisk: {
      name: "Fake Gucci Disk",
      tagName: 'gucciDisk',
      price: 217.00,
      numbers: 0,
      inCart: false
    },
    Guccipineapple: {
      name: "Fake Gucci Pineapple",
      tagName: 'gucciPineapple',
      price: 315.00,
      numbers: 0,
      inCart: false
    },
    GucciSexiness: {
      name: "Fake Gucci Sexiness",
      tagName: 'gucciSexiness',
      price: 222.00,
      numbers: 0,
      inCart: false
    },
    PolkaDotWhite: {
      name: "Fake Gucci Polka Dot White",
      tagName: 'gucciPolkaDotWhite',
      price: 190.00,
      numbers: 0,
      inCart: false
    },
    PolkaDotBlack: {
      name: "Fake Gucci Polka Dot Black",
      tagName: 'gucciPolkaDotBlack',
      price: 517.00,
      numbers: 0,
      inCart: false
    },
    GlitterPrint: {
      name: "Fake Gucci Glitter T-shirt",
      tagName: 'gucciGlitter',
      price: 111.00,
      numbers: 0,
      inCart: false
    },
    WithApple: {
      name: "Fake Gucci GG Apple T-shirt",
      tagName: 'gucciApple',
      price: 310.00,
      numbers: 0,
      inCart: false
    },
    RedSwimsuit: {
      name: "Fake Gucci Sparkling Red Swimsuit",
      tagName: 'gucciSparklingRed',
      price: 221.00,
      numbers: 0,
      inCart: false
    },
    BlackSwimsuit: {
      name: "Fake Gucci Sparkling Black Swimsuit",
      tagName: 'gucciSparklingBlack',
      price: 423.00,
      numbers: 0,
      inCart: false
    },

    GoldSwimsuit: {
      name: "Fake Gucci Stretch Gold Swimsuit",
      tagName: 'gucciStretchGold',
      price: 529.00,
      numbers: 0,
      inCart: false
    },
    WhiteSwimsuit: {
      name: "Fake Gucci Disney x Gucci Swimsuit",
      tagName: 'gucciDisney',
      price: 628.00,
      numbers: 0,
      inCart: false
    },

    // PURSES STATE
    PurseSnake: {
      name: "Fake Gucci Snake",
      tagName: 'gucciSnake',
      price: 1124.00,
      numbers: 0,
      inCart: false
    },
    PurseGreen: {
      name: "Fake Gucci LightGreen",
      tagName: 'gucciLightGreen',
      price: 1217.00,
      numbers: 0,
      inCart: false
    },
    PurseWhiteSnake: {
      name: "Fake Gucci White Snake",
      tagName: 'gucciWhiteSnake',
      price: 1315.00,
      numbers: 0,
      inCart: false
    },
    PurseBrown: {
      name: "Fake Gucci Brown",
      tagName: 'gucciBrown',
      price: 1222.00,
      numbers: 0,
      inCart: false
    },
    PurseWhiteGold: {
      name: "Fake Gucci White Gold",
      tagName: 'gucciWhiteGold',
      price: 1190.00,
      numbers: 0,
      inCart: false
    },
    PurseRedGold: {
      name: "Fake Gucci Red Gold",
      tagName: 'gucciRedGold',
      price: 1217.00,
      numbers: 0,
      inCart: false
    },
    PurseBlackGold: {
      name: "Fake Gucci Black Gold",
      tagName: 'gucciBlackGold',
      price: 1111.00,
      numbers: 0,
      inCart: false
    },
    PurseDotRed: {
      name: "Fake Gucci Polka Dot Red",
      tagName: 'gucciPolkaDotRed',
      price: 1310.00,
      numbers: 0,
      inCart: false
    },
    PurseBlackLogo: {
      name: "Fake Gucci Black Logo",
      tagName: 'gucciBlackLOgo',
      price: 1221.00,
      numbers: 0,
      inCart: false
    },
    PurseBrownLogo: {
      name: "Fake Gucci Brown Logo",
      tagName: 'gucciBrownLogo',
      price: 1223.00,
      numbers: 0,
      inCart: false
    },
    PursePink: {
      name: "Fake Gucci Pink",
      tagName: 'gucciPink',
      price: 1329.00,
      numbers: 0,
      inCart: false
    },
    PurseGoldRed: {
      name: "Fake Gucci Gold Red",
      tagName: 'gucciGoldRed',
      price: 1228.00,
      numbers: 0,
      inCart: false
    },
  }
}

export default (state = initialState, action) => {
  let productSelected = "";
  switch(action.type) {
    case ADD_PRODUCT_BASKET:
      productSelected = { ...state.products[action.payload]}
          
          productSelected.numbers += 1;
          productSelected.inCart = true;
          console.log(productSelected);
          
          return {
            ...state,
            basketNumbers: state.basketNumbers + 1,
            cartCost: state.cartCost + state.products[action.payload].price,
            products: {
              ...state.products,
              [action.payload]: productSelected
            }
          }
          case GET_NUMBERS_BASKET:
            return {
              ...state
            }
          case INCREASE_QUANTITY:        
            productSelected = { ...state.products[action.payload]}
            productSelected.numbers += 1;
            return {
              ...state,
              basketNumbers: state.basketNumbers + 1,
              cartCost: state.cartCost + state.products[action.payload].price,
              products: {
                ...state.products,
                [action.payload]: productSelected
              }
            }
      default:
          return state;
  }
}