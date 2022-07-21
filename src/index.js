
module.exports = 
function check(str, bracketsConfig) {
  let bracketOC = {};
  let bracketOne = {};
  bracketsConfig.forEach(element => {
    if (element[0] != element[1]) {
      bracketOC[element[0]] = element[1];
    }
    else  
      bracketOne[element[0]] = element[1];
  });
  let stackBrackets = [];

  //let brck = String(str).matchAll(/(\()|(\))/g)

  for (let index = 0; index < str.length; index++) {
    const element = str[index];    
    if (bracketOne[element]) {
      //значит закрывающая скобка
      if (stackBrackets.length > 0) {
        if (bracketOne[stackBrackets[stackBrackets.length-1]] === element) {
          stackBrackets.pop(); //удалить открывающую скобку            
        }
        else { 
          //добавить открывающую скобку            
          stackBrackets.push(element);
        }
      }
      else
        stackBrackets.push(element);
    } 
    else       
    if (!bracketOC[element]) {
      //значит закрывающая скобка
      if (stackBrackets.length > 0) {
        if (bracketOC[stackBrackets[stackBrackets.length-1]] === element) {
          stackBrackets.pop(); //удалить открывающую скобку
        }
        else
          break;
      }
      else  
        stackBrackets.push(element);        
    }
    else {
      stackBrackets.push(element);
    }
        
  }

  return stackBrackets.length === 0;
}


//const config1 = [['(', ')']];
//const config2 = [['(', ')'], ['[', ']']];
//const config4 = [['|', '|']];
//const config5 = [['(', ')'], ['|', '|']];
//const config6 = [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']];
//const config7 = [['(', ')'], ['[', ']'], ['{', '}'], ['|', '|']];
//console.log(check('((()))()', config1))
//console.log(check('[(])', config2))
//console.log(check('|()|(||)||', config5));
//console.log(check('[]()(', config2));
//console.log(check('||', config4));
//console.log(check('([[[[(({{{}}}(([](((((((())))||||||))))[[{{|{{}}|}}[[[[]]]]{{{{{}}}}}]]))))]]]]))()', config7));
//console.log(check('8888877878887777777888888887777777887887788788887887777777788888888887788888', config6));

