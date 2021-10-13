const arr = ['JavaScript', 'TypeScript', 'React', 'HTML', 'CSS', 1];

// arr.forEach((elem, index, originalArray) => {
//   console.log(elem, index, originalArray);
// });

// const arr1 = arr.map((elem, index, originalArray) => {
//   if (elem === 'JavaScript') {
//     return 'JabaScript';
//   } else {
//     return elem;
//   }
// });

// console.log('arr1', arr1);
// console.log('arr', arr);

// const str = '12345';
// str.split('').filter(() => null).join('');

// const filteredArr = arr.filter((elem, index, originalArray) => {
//   // if (elem === 'HTML') {
//   //   return false;
//   // } else {
//   //   return true;
//   // }

//   return elem !== 'HTML';
// });
// const filterArr = arr.filter((elem) => elem !== 'HTML');
// console.log(filterArr);

// const html = arr.find((elem, index, originalArray) => elem === 'HTML');

// if (html) {
//   console.log(html);
// } else {
//   console.log('Error 404: Not found');
// }

// const doesIncludesHtml = arr.some((elem) => elem === 'HTML');
// console.log(doesIncludesHtml);

// const isAllStrings = arr.every((elem) => typeof elem === 'string');
// console.log(isAllStrings);

const posts = [
  {
    title: 'Title 1',
    views: 125,
  },
  {
    title: 'Title 2',
    views: 350,
  },
  {
    title: 'Title 3',
    views: 9999,
  },
];

function sum(arr, key) {
  const finalValue = arr.reduce((prev, elem, index, originalArray) => {
    return prev + elem[key];
  }, 0);
  console.log(finalValue);
}

// sum(posts, 'views');

const obj = {
  a: 'a',
  b: 'b',
};

const objKey = 'a';

console.log(obj[objKey]);
