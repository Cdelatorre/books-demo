export const parseCart = (cart) => {
  return cart.reduce((acc, product) => {
    if (acc[product]) {
      acc[product] = acc[product] + 1;
    } else {
      acc[product] = 1;
    }

    return acc;
  }, {});
};
