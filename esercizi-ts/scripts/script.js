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
    if (operand === "sum") {
        document.getElementById("resultSum").innerHTML = "" + operation.sum();
    }
    if (operand === "difference") {
        document.getElementById("resultDifference").innerHTML =
            "" + operation.diff();
    }
    if (operand === "multiplication") {
        document.getElementById("resultMultiplication").innerHTML =
            "" + operation.mult();
    }
    if (operand === "division") {
        document.getElementById("resultDivision").innerHTML = "" + operation.div();
    }
};
// User check typescript excercise
var userChecker = /** @class */ (function () {
    function userChecker(user) {
        this.user = user;
        this.adminList = {
            admin: ["admin", "marco"],
            user: ["marco", "giovanni", "luca", "matteo"]
        };
    }
    userChecker.prototype.check = function () {
        var _this = this;
        var roles = [];
        for (var _i = 0, _a = Object.keys(this.adminList); _i < _a.length; _i++) {
            var role = _a[_i];
            var match = this.adminList[role].some(function (element) { return element === _this.user; });
            if (match) {
                roles.push(role);
            }
        }
        return roles;
    };
    return userChecker;
}());
var userCheckHandler = function () {
    var checker = new userChecker(document.getElementById("user").value);
    if (checker.check()) {
        document.getElementById("user-check-result").innerHTML =
            "<p>The user inserted is " + checker.check() + "</p>";
    }
    else {
        document.getElementById("user-check-result").innerHTML =
            "<p>The user inserted is not a user</p>";
    }
};
var Circle = /** @class */ (function () {
    function Circle(h, w) {
        this.sides = 1;
        this.h = h;
        this.w = w;
    }
    Circle.prototype.print = function () {
        return {
            width: this.w + "px",
            height: this.h + "px",
            "border-radius": "50%",
            border: "1px solid black"
        };
    };
    return Circle;
}());
var Trapezoid = /** @class */ (function () {
    function Trapezoid(h, w) {
        this.sides = 4;
        this.h = h;
        this.w = w;
    }
    Trapezoid.prototype.print = function () {
        return {
            width: this.w + "px",
            height: this.h + "px",
            border: '1px solid black',
            "transform-origin": "50% 50%",
            transform: "perspective(20px) rotateX(10deg) rotateY(0deg);"
        };
    };
    return Trapezoid;
}());
var Rhombus = /** @class */ (function () {
    function Rhombus(h, w) {
        this.sides = 4;
        this.h = h;
        this.w = w;
    }
    Rhombus.prototype.print = function () {
        return {
            width: this.w + "px",
            height: this.h + "px",
            border: '1px solid black',
            transform: "rotate(65deg) skewX(45deg) scaleY(cos(45deg))"
        };
    };
    return Rhombus;
}());
var geometricFiguresHandler = function () {
    var figureChoose = document.getElementById("figure")
        .value;
    var height = document.getElementById("height").value;
    var width = document.getElementById("width").value;
    if (figureChoose === "circle") {
        var figure = new Circle(+width, +height);
        var string = "";
        for (var _i = 0, _a = Object.keys(figure.print()); _i < _a.length; _i++) {
            var key = _a[_i];
            string += key + ":" + figure.print()[key] + ";";
        }
        document.getElementById("result").style.cssText = string;
    }
    else if (figureChoose === "trapezoid") {
        var figure = new Trapezoid(+width, +height);
        var string = "";
        for (var _b = 0, _c = Object.keys(figure.print()); _b < _c.length; _b++) {
            var key = _c[_b];
            string += key + ":" + figure.print()[key] + ";";
        }
        document.getElementById("result").style.cssText = string;
    }
    else if (figureChoose === "rhombus") {
        var figure = new Rhombus(+width, +height);
        var string = "";
        for (var _d = 0, _e = Object.keys(figure.print()); _d < _e.length; _d++) {
            var key = _e[_d];
            string += key + ":" + figure.print()[key] + ";";
        }
        console.log(string);
        document.getElementById("result").style.cssText = string;
    }
};
