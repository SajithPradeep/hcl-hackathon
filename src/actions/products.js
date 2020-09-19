export const addToCart = (product) => {
  return {
    type: "ADD_TO_CART",
    product,
  };
};

export const updateProductInCart = (id, updates) => {
  return {
    type: "UPDATE_CART",
    id,
    updates,
  };
};
export const removeItem = (id) => {
  return {
    type: "REMOVE_ITEM",
    id,
  };
};
