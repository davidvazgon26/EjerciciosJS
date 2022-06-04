'use strict';

var _input = '';
var _index = 0;
process.stdin.on('data', (data) => { _input += data; });
process.stdin.on('end', () => {
    _input = _input.split(new RegExp('[ \n]+'));
    main();    
});
function read() { return _input[_index++]; }

/**** Ignore above this line. ****/

class Person {
    constructor(firstName, lastName, identification) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.idNumber = identification;
    }
    
    printPerson() {
        console.log(
            "Name: " + this.lastName + ", " + this.firstName 
            + "\nID: " + this.idNumber
        )
    }
}

class Student extends Person {
    /*	
    *   Class Constructor
    *   
    *   @param firstName - A string denoting the Person's first name.
    *   @param lastName - A string denoting the Person's last name.
    *   @param id - An integer denoting the Person's ID number.
    *   @param scores - An array of integers denoting the Person's test scores.
    */
    // Write your constructor here
    constructor(firstName, lastName, idNumber, scores){
        super();
        this.firstName =firstName
        this.lastName = lastName
        this.idNumber = idNumber
        this.scores = scores
    }

    /*	
    *   Method Name: calculate
    *   @return A character denoting the grade.
    */
    // Write your method here
    
    calculate(){
        let tot = 0
        let av = 0
        const result = this.scores.reduce((prev, curr)=> prev+curr,tot)
       
        av = result/this.scores.length
        let valor = ""
        
        switch(true){
            case (av>=90):
             valor = "O"
             break;
            case (av>=80):
             valor = "E"
             break;
            case (av>=70):
             valor = "A"
             break;
            case (av>=55):
             valor = "P"
             break;
            case (av>=40):
             valor = "D"
             break;
            case (av<40):
             valor = "T"
             break;
            default:
            break;
        }
        
        return valor
    }
    
    
    
}


function main() {
    let firstName = read()
    let lastName = read()
    let id = +read()
    let numScores = +read()
    let testScores = new Array(numScores)
    
    for (var i = 0; i < numScores; i++) {
        testScores[i] = +read()  
    }

    let s = new Student(firstName, lastName, id, testScores)
    s.printPerson()
    s.calculate()
    console.log('Grade: ' + s.calculate())
}