'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');
let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;
process.stdin.on('data', function(inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function(): void {
    inputLines = inputString.split('\n');
    inputString = '';
    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

function main() {
    // Enter your code here
    let arr = inputLines[1].split(' ');
    let max = 0;
    let min = +inputLines[1].split(" ")[0];
     arr.forEach(item =>{
         let valor = +item
         if(max<valor){
             max = valor 
         }else if(min>valor){
             min = valor
         }
     })
     console.log(max-min)
    }
