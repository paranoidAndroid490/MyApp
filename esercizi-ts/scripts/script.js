// 4 operations typescript excercise
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
    if (operand === 'sum') {
        document.getElementById('resultSum').innerHTML = "" + operation.sum();
    }
    if (operand === 'difference') {
        document.getElementById('resultDifference').innerHTML = "" + operation.diff();
    }
    if (operand === 'multiplication') {
        document.getElementById('resultMultiplication').innerHTML = "" + operation.mult();
    }
    if (operand === 'division') {
        document.getElementById('resultDivision').innerHTML = "" + operation.div();
    }
};
// User check typescript excercise
var userChecker = /** @class */ (function () {
    function userChecker(user) {
        this.user = user;
        this.adminList = ['admin', 'marco'];
    }
    userChecker.prototype.check = function () {
        var _this = this;
        var match = this.adminList.some(function (element) { return element === _this.user.toLowerCase(); });
        return match;
    };
    return userChecker;
}());
var userCheckHandler = function () {
    var checker = new userChecker(document.getElementById('user').value);
    if (checker.check()) {
        document.getElementById("user-check-result").innerHTML =
            "<p>The user inserted is an admin</p>";
    }
    else {
        document.getElementById("user-check-result").innerHTML =
            "<p>The user inserted is not an admin</p>";
    }
};
