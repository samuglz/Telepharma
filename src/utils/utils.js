export const normalizePrice = number => {
   return parseFloat(number)
      .toFixed(2)
      .toString()
      .replace('.', ',');
};
