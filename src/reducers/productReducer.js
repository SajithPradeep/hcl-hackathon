const productReducerDefaultState = [];

export default (state = productReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return [...state, action.product];
    case "UPDATE_CART":
      return state.map((product) => {
        if (product.id === action.id) {
          return { ...product, ...action.updates };
        } else {
          return product;
        }
      });
    case "REMOVE_ITEM":
      return state.filter((product) => {
        return product.id !== action.id;
      });
    default:
      return state;
  }
};
