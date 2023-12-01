import { readFile, readFileSync } from 'node:fs';
const allFileContents = readFileSync('input','utf-8');

//functions
  const checkCharacterType = (element) => {
    return !isNaN(parseInt(element)) ? true : false
  }
//


let sum = 0;
allFileContents.split(/\r?\n/).forEach( line => {
  let first = '';
  let last  = '';
  let find = false;
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
    sum += Number(first.toString() + last.toString())
  })
