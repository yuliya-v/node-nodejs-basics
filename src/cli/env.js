export const parseEnv = () => {
  return Object.entries(process.env)
    .filter(([key]) => (/^RSS_/).test(key) ? true : false)
    .map(([key, value]) => `${key}=${value}`)
    .join('; ');  
};
  
console.log(parseEnv());
