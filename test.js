const str = 'one.two.three.four.five';

/*{
    one: {
        two: {
            three: {
                ...
            }
        }
    }
}*/

function strInObj (str) {
  const obj = {};
  const split = str.split('.')

  for (let i = 0; i < split.length - 1; i++ ) {
    obj[split[i]]
  }

  return obj; 
}

console.log(strInObj(str));
