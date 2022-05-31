// 4 operations typescript excercise

interface Operations {
  num1: number;
  num2: number;
  sum: () => number;
  diff: () => number;
  mult: () => number;
  div: () => number;
}

class Operation implements Operations {
  constructor(public num1: number, public num2: number) {}

  sum() {
    return this.num1 + this.num2;
  }
  diff() {
    return this.num1 - this.num2;
  }
  mult() {
    return this.num1 * this.num2;
  }
  div() {
    return this.num1 / this.num2;
  }
}

const operationsHandler = (operand) => {
  let firstNum = prompt("Please, insert the first number");
  let secondNum = prompt("Please, insert the second number ");
  let operation = new Operation(+firstNum, +secondNum);
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

class userChecker {
  adminList: object = {
    admin: ["admin", "marco"],
    user: ["marco", "giovanni", "luca", "matteo"],
  };

  constructor(public user: string) {}

  check() {
    let roles: string[] = [];
    for (let role of Object.keys(this.adminList)) {
      let match = this.adminList[role].some((element) => element === this.user);
      if (match) {
        roles.push(role);
      }
    }
    return roles;
  }
}

const userCheckHandler = () => {
  const checker: userChecker = new userChecker(
    (document.getElementById("user") as HTMLInputElement).value
  );
  if (checker.check()) {
    document.getElementById("user-check-result").innerHTML =
      "<p>The user inserted is " + checker.check() + "</p>";
  } else {
    document.getElementById("user-check-result").innerHTML =
      "<p>The user inserted is not a user</p>";
  }
};

//Inheritance and Polymorphism typescript excercise

interface GeometricFigure {
  sides: number;
  h: number;
  w: number;
  print: () => Object;
}

class Circle implements GeometricFigure {
  sides = 1;
  h: number;
  w: number;

  constructor(h: number, w: number) {
    this.h = h;
    this.w = w;
  }

  print() {
    return {
      width: this.w + "px",
      height: this.h + "px",
      "border-radius": "50%",
      border: "1px solid black",
    };
  }
}

class Trapezoid implements GeometricFigure {
  sides = 4;
  h: number;
  w: number;

  constructor(h: number, w: number) {
    this.h = h;
    this.w = w;
  }

  print() {
    return {
      width: this.w + "px",
      height: this.h + "px",
        border: '1px solid black',
      "transform-origin": "50% 50%",
      transform: "perspective(20px) rotateX(10deg) rotateY(0deg);",
    };
  }
}
class Rhombus implements GeometricFigure {
  sides = 4;
  h: number;
  w: number;

  constructor(h: number, w: number) {
    this.h = h;
    this.w = w;
  }

  print() {
    return {
      width: this.w + "px",
      height: this.h + "px",
      border:'1px solid black',
      transform: "rotate(65deg) skewX(45deg) scaleY(cos(45deg))",
    };
  }
}

const geometricFiguresHandler = () => {
  const figureChoose = (document.getElementById("figure") as HTMLInputElement)
    .value;
  const height = (document.getElementById("height") as HTMLInputElement).value;
  const width = (document.getElementById("width") as HTMLInputElement).value;

  if (figureChoose === "circle") {
    const figure = new Circle(+width, +height);
    let string = "";
    for (let key of Object.keys(figure.print())) {
      string += key + ":" + figure.print()[key] + ";";
    }
    document.getElementById("result").style.cssText = string;
  } else if (figureChoose === "trapezoid") {
    const figure = new Trapezoid(+width, +height);
    let string = "";
    for (let key of Object.keys(figure.print())) {
      string += key + ":" + figure.print()[key] + ";";
    }
    document.getElementById("result").style.cssText = string;
  } else if (figureChoose === "rhombus") {
    const figure = new Rhombus(+width, +height);
    let string = "";
    for (let key of Object.keys(figure.print())) {
      string += key + ":" + figure.print()[key] + ";";
    }
    console.log(string);
    document.getElementById("result").style.cssText = string;
  }
};
