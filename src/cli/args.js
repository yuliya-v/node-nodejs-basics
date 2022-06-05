export const parseArgs = () => {
  const args = process.argv.slice(2)
    .reduce((acc, val, ind, arr) => {
      if (!(ind % 2)) {
        acc[val.slice(2)] = arr[ind + 1];
      }
      return acc;
    }, {});
  
  return Object.entries(args)
   .map(([key, val]) => `${key} is ${val}`)
   .join(', ');

};

console.log(parseArgs());
