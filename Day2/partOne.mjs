import { readFile, readFileSync } from 'node:fs';
const allFileContents = readFileSync('input','utf-8')

let sum = 0;
const maxRedCubes   = 12;
const maxblueCubes  = 14;
const maxGreenCubes = 13;

const allFileContentsTable = allFileContents.split(/\r?\n/).forEach( line =>{ 
                                                let gameContinue = true;
                                                let gameNumber = Number(line.split(': ')[0].split(' ')[1])
                                                let sets  = line.split(': ')[1].split(';').map(element => element.split(','))
                                                for (let index = 0; index < sets.length; index++) {
                                                   let redCubes = 0;
                                                   let blueCubes = 0;
                                                   let greenCubes = 0;
                                                      let subset = sets[index]
                                                      for (let index = 0; index < subset.length; index++) {
                                                           let data = subset[index].trimStart().split(' ')
                                                           if(data[1] === 'blue') blueCubes+=Number(data[0])
                                                           else if(data[1] === 'red') redCubes+=Number(data[0])
                                                           else if(data[1] === 'green') greenCubes+=Number(data[0]) 
                                                      }  
                                                      if( maxRedCubes >= redCubes && 
                                                          maxblueCubes >= blueCubes && 
                                                          maxGreenCubes >= greenCubes ){
                                                          gameContinue = true 
                                                        } else{
                                                          gameContinue = false
                                                          break;
                                                        }                                                   
                                                      }
                                                if(gameContinue) {
                                                sum+= gameNumber}
                                                                                                                                                                              
})


