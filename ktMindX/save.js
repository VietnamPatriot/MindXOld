const keys = Object.keys(localStorage);
keys.forEach(key => {
  const value = localStorage.getItem(key);
  console.log(`${key}: ${value}`);
});