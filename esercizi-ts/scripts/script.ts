interface Operations {
    num1:number;
    num2:number;
    sum: ()=> number;
    diff: ()=>number;
    mult: ()=>number;
    div: ()=>number;

}

class Operation implements Operations{

    constructor( public num1:number, public num2:number){

    }

    sum(){
        return this.num1 + this.num2
    }
    diff(){
        return this.num1 - this.num2
    }
    mult(){
        return this.num1 * this.num2
    }
    div(){
        return this.num1 / this.num2
    }

}


const operationsHandler = (operand) => {
    let firstNum = prompt("Please, insert the first number");
    let secondNum = prompt("Please, insert the second number ");
    let operation = new Operation(+firstNum,+secondNum)
    if (operand === 'sum'){
        document.getElementById('resultSum').innerHTML = ""+operation.sum()
    }
    if (operand === 'difference'){
        document.getElementById('resultDifference').innerHTML = ""+operation.diff()
    }
    if (operand === 'multiplication'){
        document.getElementById('resultMultiplication').innerHTML = ""+operation.mult()
    }
    if (operand === 'division'){
        document.getElementById('resultDivision').innerHTML = ""+operation.div()
    }
      
}