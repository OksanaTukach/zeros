module.exports = function zeros(expression) {
  let arr = expression.split('*')
  let countFives = 0;
  let countTwos = 0;

arr.forEach(element => {
  let n = element.match(/!/g).length;
  element = element.match(/\d+/);

  for (element; element > 0; element -= n) {
    let elem = element;
    while (elem % 5 === 0) {
      countFives++;
      elem = elem/5;
    }
    while (elem %2 === 0){
      countTwos++;
      elem = elem/2;
    }
  }
});
if (countFives>countTwos) {
  return countTwos;
} else {
  return countFives;
}
}