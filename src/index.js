module.exports = function check(str, bracketsConfig) {
  str = str.split('');

  let map = new Map (arr);

  for (let i = 0; i < str.length-1; i++) {


      if ( str[i+1] == map.get(str[i]) ) {

          str.splice(i,2);

          if (!str.length) {

              return true;
          }

          i = -1;

      }
  }

  return str.length? false: true;
}
