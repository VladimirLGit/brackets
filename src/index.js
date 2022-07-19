module.exports = 
function check(str, bracketsConfig) {
  let strCheck = String(str).split('');
  
  Array.from(bracketsConfig).reverse().forEach(element => {
    let intBrackets =  0;  
    let fromIndexBegin = 0;
    let fromIndexEnd = 0;
    while ((fromIndexBegin != -1) && (fromIndexEnd != -1))  {
      fromIndexBegin = strCheck.lastIndexOf(element[0]);
      fromIndexEnd = strCheck.indexOf(element[1], fromIndexBegin);
      if ((fromIndexBegin != -1) && (fromIndexEnd != -1) /*&& (fromIndexEnd - fromIndexBegin === 1)*/) {
        strCheck.splice(fromIndexBegin,1);
        strCheck.splice(fromIndexEnd-1,1);
      }
      else {
        break;
      }
    }    
  });
  return strCheck.length === 0;
}
// const config1 = [['(', ')']];
// const config2 = [['(', ')'], ['[', ']']];
// console.log(check('((()))()', config1))
// console.log(check('[(])', config2))
