// index of

const arr = [ [17, [83, 49], [43, [90], [60] ] ] ];

function biggestNum(array) {

  let maxNumberEachArray = array.map((element) => {

    if(element.isArray())

    return Math.max.apply(Math, element);
  });

  var max = Math.max.apply(null, maxNumberEachArray);

  return max;
}

console.log(biggestNum(arr));
