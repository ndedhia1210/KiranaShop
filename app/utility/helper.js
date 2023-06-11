export const listGenerator = (numItems, uniqueStr) => {
  return [...Array(numItems)].map((_, i) => {
    return {
      name: `${uniqueStr} item ${i}`,
      price: Math.floor(Math.random() * 250) + 150,
    };
  });
};
