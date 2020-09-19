const grandTotalDefaultState = 0;

export default (state = grandTotalDefaultState, action) => {
  switch (action.type) {
    case "UPDATE_GRAND_TOTAL":
      return action.grandTotal;
    default:
      return state;
  }
};
