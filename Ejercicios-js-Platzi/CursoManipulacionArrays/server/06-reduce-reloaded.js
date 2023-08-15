const items = [1, 3, 2, 3, 1, 1, 2, 3, 5];

const result = items.reduce((obj, item) => {
  console.log(item);
  if (!obj[item]) {
    obj[item] = 1;
  } else {
    obj[item] = obj[item] + 1;
  }
  return obj;
}, {});

console.log(result);
