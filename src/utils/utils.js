export const normalizePrice = number => {
   return parseFloat(number)
      .toFixed(2)
      .toString()
      .replace('.', ',');
};

export const formatDate = date => {
   let day = 0;
   date.getDate() < 10
      ? (day = `0${date.getDate()}`)
      : (day = `${date.getDate()}`);
   let month = 0;
   date.getMonth() < 9
      ? (month = '0' + `${date.getMonth() + 1}`)
      : (month = `${date.getMonth() + 1}`);
   return `${day}/${month}/${date.getFullYear()}`;
};
