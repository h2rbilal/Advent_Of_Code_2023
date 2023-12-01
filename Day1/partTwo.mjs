import { readFile, readFileSync } from 'node:fs';
const allFileContents = readFileSync('input','utf-8');

//functions
  const checkCharacterType = (char) => {
    return !isNaN(parseInt(char)) ? true : false
  }

  const replaceStringbyNumber = (myString) =>{
    let newString = ''
    const replacements = {
      "one":"o1e" ,
      "two": "t2o",
      "three":"t3e",
      "four":"f4r",
      "five":"f5e",
      "six":"s6x",
      "seven":"s7n",
      "eight":"e8t",
      "nine":"n9e"
    };
  
    for (let index = 0; index < myString.length; index++) {
      const element = myString[index];
      newString += element
      for ( let key in replacements ){
        newString = newString.replace(key , replacements[key])
      }
    }
    return newString
  }
//


let sum = 0;
allFileContents.split(/\r?\n/).forEach( line => {
  let first = '';
  let last  = '';
  let find = false;
  line = replaceStringbyNumber(line)

  for (let index = 0; index < line.length; index++) {
    const element = line[index];   
    if(checkCharacterType(element) && !find ){
        first = element;
        last  = element;
        find  = true;
    }else if(checkCharacterType(element)){
        last  = element;
    }
  }

    sum += Number( first.toString() + last.toString() )
  })

