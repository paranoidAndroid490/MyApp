var Operation = /** @class */ (function () {
    function Operation(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }
    Operation.prototype.sum = function () {
        return this.num1 + this.num2;
    };
    Operation.prototype.diff = function () {
        return this.num1 - this.num2;
    };
    Operation.prototype.mult = function () {
        return this.num1 * this.num2;
    };
    Operation.prototype.div = function () {
        return this.num1 / this.num2;
    };
    return Operation;
}());
var operationsHandler = function (operand) {
    var firstNum = prompt("Please, insert the first number");
    var secondNum = prompt("Please, insert the second number ");
    var operation = new Operation(+firstNum, +secondNum);
    console.log(operation.sum());
};
