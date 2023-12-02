import { readFile, readFileSync } from 'node:fs';
const allFileContents = readFileSync('input','utf-8')
let sum = 0;

const allFileContentsTable = allFileContents.split(/\r?\n/).forEach( line =>{ 
                                                let redCubes = 1;
                                                let blueCubes = 1;
                                                let greenCubes = 1;
                                                let gameNumber = Number(line.split(': ')[0].split(' ')[1])
                                                let sets  = line.split(': ')[1].split(';').map(element => element.split(','))
                                                for (let index = 0; index < sets.length; index++) {
                                                
                                                      let subset = sets[index]
                                                      for (let index = 0; index < subset.length; index++) {
                                                           let data = subset[index].trimStart().split(' ')
                                                           if( data[1] === 'blue' && blueCubes < Number(data[0])) blueCubes = Number(data[0])
                                                           else if(data[1] === 'red' && redCubes  < Number(data[0]) ) redCubes = Number(data[0])
                                                           else if(data[1] === 'green' && greenCubes < Number(data[0])) greenCubes = Number(data[0]) 
                                                      }  
                                                                                                     
                                                }
                                                console.log(blueCubes , redCubes , greenCubes )
                                                sum += ( blueCubes * redCubes * greenCubes )

                                                                                                                                                                              
})


