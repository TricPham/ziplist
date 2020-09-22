// eslint-disable-next-line consistent-return
function zipList(num, str) {
  const arr = [];
  if (num.length === str.length) {
    for (let i = 0; i < num.length; i++) {
      arr.push(num[i], str[i]);
    }
    return arr;
  }
}

// eslint-disable-next-line consistent-return
function zipListTheSimpleWay(num, str) {
  if (num.length === str.length) {
    return _.flatten(_.zip(num, str));
  }
}

const str = ['a', 'b', 'c'];
const num = [1, 2, 3];

console.log(zipList(num, str));
console.log(zipListTheSimpleWay(num, str));
