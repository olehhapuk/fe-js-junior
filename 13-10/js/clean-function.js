function counter(prevValue) {
  const newValue = prevValue + 1;
  return newValue;
}

let value = 1;
value = counter(value);
value = counter(value);
console.log(value);
