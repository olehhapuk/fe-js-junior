function doPrint(count, action) {
  for (let i = 0; i < count; i++) {
    action();
  }
}

// doPrint(5, () => {
//   console.log('Working');
// });

function printWorking() {
  console.log('Working');
}

doPrint(3, printWorking);

// element.addEventListener('click', () => {
// });
