/**This function provides for the acquisition ,
 *  validation and storage of the data entered in the form by the user */
const getData = (event) => {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const check = document.getElementById("check").checked;
  const date = document.getElementById("date").value;
  const radioOne = document.getElementById("radioOne").checked;
  const radioTwo = document.getElementById("radioTwo").checked;
  const radioThree = document.getElementById("radioThree").checked;
  const points = document.getElementById("points").value;
  const color = document.getElementById("favcolor").value;
  const car = document.getElementById("cars").value;
  const text = document.getElementById("text-area").value;

  formIsValid = validityFormHandler(
    username,
    password,
    check,
    date,
    radioOne,
    radioTwo,
    radioThree,
    points,
    color,
    car,
    text
  );

  if (formIsValid) {
    const data = {
      username: username,
      password: password,
      checkbox: check,
      date: date,
    };
    fetchPostData(data);
    fetchGetData().then((result) => dataModalHandler(result));
  }
};

/**This function provides for the visualization of the data entered by the user in the modal */
const dataModalHandler = (userData) => {
  document.getElementById("modalUsername").innerHTML = userData.username;
  document.getElementById("modalPassword").innerHTML = userData.password;
  document.getElementById("modalCheck").innerHTML = userData.checkbox;
  document.getElementById("modalDate").innerHTML = userData.date;
  openModal();
};

/**This function provides for the validation of the data entered by the user */
const validityFormHandler = (
  username,
  password,
  check,
  date,
  radioOne,
  radioTwo,
  radioThree,
  points,
  color,
  car,
  text
) => {
  const validityForm = {
    username: true,
    password: true,
    check: true,
    date: true,
  };

  if (username.trim() == "") {
    validityForm.username = false;
    document.getElementById("formUsername").classList.add("invalid");
    document.getElementById("error-username").innerHTML =
      "<p id='error-username' class='error'>Please insert a valid username</p>";
  } else {
    validityForm.username = true;
    document.getElementById("formUsername").classList.remove("invalid");
    document.getElementById("error-username").innerHTML =
      "<p id='error-username'></p>";
  }
  if (password.trim() == "") {
    validityForm.password = false;
    document.getElementById("formPassword").classList.add("invalid");
    document.getElementById("error-password").innerHTML =
      "<p id='error-password' class='error'>Please insert a valid password</p>";
  } else {
    validityForm.password = true;
    document.getElementById("formPassword").classList.remove("invalid");
    document.getElementById("error-password").innerHTML =
      '<p id="error-password"></p>';
  }
  if (check != true) {
    validityForm.check = false;
    document.getElementById("formCheckbox").classList.add("invalid");
    document.getElementById("error-check").innerHTML =
      "<p id='error-check' class='error'>Please check the box</p>";
  } else {
    validityForm.check = true;
    document.getElementById("formCheckbox").classList.remove("invalid");
    document.getElementById("error-check").innerHTML =
      '<p id="error-check"></p>';
  }
  if (date == "") {
    validityForm.date = false;
    document.getElementById("formDate").classList.add("invalid");
    document.getElementById("error-date").innerHTML =
      "<p id='error-date' class='error'>Please insert a valid date</p>";
  } else {
    validityForm.date = true;
    document.getElementById("formDate").classList.remove("invalid");
    document.getElementById("error-date").innerHTML = '<p id="error-date"></p>';
  }

  const validate =
    validityForm.username &&
    validityForm.password &&
    validityForm.check &&
    validityForm.date;
  return validate;
};

/**This function fetches the data to the backend through the post method */
const fetchPostData = async (insertData) => {
  const response = await fetch(
    "https://my-app-1efbd-default-rtdb.firebaseio.com/data.json",
    {
      method: "POST",
      body: JSON.stringify(insertData),
      headers: { "Content-Type": "application/json" },
    }
  );
  const data = await response.json;
  console.log(data);
};
/**This function provides the fetch of the data from the beckend,
 *  returns an object that is the last element inserted */
const fetchGetData = async () => {
  try {
    const response = await fetch(
      "https://my-app-1efbd-default-rtdb.firebaseio.com/data.json"
    );
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    const data = await response.json();
    const loadedData = [];

    for (const key in data) {
      loadedData.push({
        username: data[key].username,
        password: data[key].password,
        checkbox: data[key].checkbox,
        date: data[key].date,
      });
    }

    return loadedData[loadedData.length - 1];
  } catch (error) {
    console.log("Something");
  }
};

/**This function provides for the display of the main content within the page */
const displayContent = (id) => {
  const frames = [
    { id: "form", url: "./form.html" },
    { id: "operations", url: "./operations.html" },
    { id: "user-check", url: "./usercheck.html" },
    { id: "background", url: "./background.html" },
    { id: "window", url: "./window.html" },
    { id: "tables", url: "./tables.html" },
    { id: "selection-sort", url: "./selection-sort.html" },
    { id: "insertion-sort", url: "./insertion-sort.html" },
    { id: "prime-numbers", url: "./prime-numbers.html" },
    { id: "hardware-store", url: "./hardware-store.html" },
    { id: "date-validation", url: "./date-validation.html" },
    { id: "tabelline", url: "./tabelline.html" },
  ];
  frames.map((frame) => {
    if (frame.id == id) {
      document.getElementById("content").src = frame.url;
    }
  });
};

const openNav = () => {
  document.getElementById("sidebar").style.width = "300px";
  document.getElementById("main").style.marginLeft = "300px";
};

const closeNav = () => {
  document.getElementById("sidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
};

const openModal = () => {
  document.getElementById("modal").classList.remove("hidden");
};

const closeModal = () => {
  document.getElementById("modal").classList.add("hidden");
};

const operations = (operand) => {
  let firstNum = prompt("Please, insert the first number");
  let secondNum = prompt("Please, insert the second number ");
  if (operand == "sum") {
    document.getElementById("resultSum").innerHTML = +firstNum + +secondNum;
  }
  if (operand == "difference") {
    document.getElementById("resultDifference").innerHTML =
      +firstNum - +secondNum;
  }
  if (operand == "multiplication") {
    document.getElementById("resultMultiplication").innerHTML =
      +firstNum * +secondNum;
  }
  if (operand == "division") {
    document.getElementById("resultDivision").innerHTML =
      +firstNum / +secondNum;
  }
};

const checkUser = () => {
  const adminList = ["admin", "marco"];
  const username = document.getElementById("user").value;

  let match = adminList.find((user) => user === username);
  if (match) {
    document.getElementById("user-check-result").innerHTML =
      "<p>The user inserted is an admin</p>";
  } else {
    document.getElementById("user-check-result").innerHTML =
      "<p>The user inserted is not an admin</p>";
  }
};

const counter = (function () {
  let count = 0;
  return function () {
    if (count < 4) {
      return count++;
    } else {
      count = 0;
      return count;
    }
  };
})();

const getColor = (count) => {
  const colors = ["red", "green", "blue", "yellow"];
  return colors[count];
};

let timer;
const startTimer = () => {
  document.body.style.backgroundColor = getColor(counter());
  timer = setInterval(() => {
    document.body.style.backgroundColor = getColor(counter());
  }, 2000);
};
const stopTimer = () => {
  clearInterval(timer);
};

const windowGetData = () => {
  document.getElementById("appNameNav").innerHTML =
    "AppName: " + window.navigator.appName;
  document.getElementById("connectionNav").innerHTML =
    "Connection: " + window.navigator.connection;
  document.getElementById("languageNav").innerHTML =
    "Language: " + window.navigator.language;
  document.getElementById("userAgentNav").innerHTML =
    "UserAgent: " + window.navigator.userAgent;
  document.getElementById("userAgentDataNav").innerHTML =
    "UserAgentData: " + window.navigator.userAgentData;
  document.getElementById("vendorNav").innerHTML =
    "Vendor: " + window.navigator.vendor;
  document.getElementById("lenghtHistory").innerHTML =
    "Lenght: " + window.history.length;
  document.getElementById("lastModDoc").innerHTML =
    "Last Modified: " + window.document.lastModified;
  document.getElementById("activeEldDoc").innerHTML =
    "Active Element: " + window.document.activeElement;
  document.getElementById("baseURIDoc").innerHTML =
    "Base URI: " + window.document.baseURI;
  document.getElementById("charsetDoc").innerHTML =
    "Charset: " + window.document.characterSet;
  document.getElementById("hostLoc").innerHTML =
    "Host: " + window.location.host;
  document.getElementById("hrefLoc").innerHTML =
    "Href: " + window.location.href;
  document.getElementById("pathNameLoc").innerHTML =
    "Pathname: " + window.location.pathname;
};

const bigPictureModalHandler = (url) => {
  document.getElementById("picture-big").src = url;
  openModal();
};

const selectionSort = () => {
  const swapNumber = (array, index1, index2) => {
    let temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
  };

  let strings = document.getElementById("numbers").value.split("-");
  let numbers = [];
  for (let i = 0; i < strings.length; i++) {
    numbers.push(+strings[i]);

    let min_idx;
    for (let i = 0; i < numbers.length - 1; i++) {
      min_idx = i;
      for (let j = i + 1; j < numbers.length; j++) {
        if (numbers[j] < numbers[min_idx]) {
          min_idx = j;
        }
      }
      swapNumber(numbers, min_idx, i);
    }
    document.getElementById("result").innerHTML = numbers;
  }
};

const insertionSort = () => {
  let strings = document.getElementById("numbers").value.split("-");
  let numbers = [];
  for (let i = 0; i < strings.length; i++) {
    numbers.push(+strings[i]);
  }

  for (let i = 0; i < numbers.length; i++) {
    let key = numbers[i];
    let j = i - 1;
    console.log(j);

    while (j >= 0 && numbers[j] > key) {
      numbers[j + 1] = numbers[j];
      j = j - 1;
    }

    numbers[j + 1] = key;
  }
  document.getElementById("result").innerHTML = numbers;
};

const isPrimeNumber = (domMod, number) => {
  let num;
  if (number === undefined) {
    num = parseInt(document.getElementById("number").value);
  } else {
    num = number;
  }
  let isPrime = true;
  if (num === 1 && domMod) {
    console.log("ciao");
    isPrime = false;
    document.getElementById("result").innerHTML =
      "1 is neither prime nor composite number.";
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
  if (domMod && isPrime) {
    document.getElementById("result").innerHTML = "True";
  } else if (domMod && !isPrime && num != 1) {
    document.getElementById("result").innerHTML = "False";
  } else {
    return isPrime;
  }
};

const primeNumbersHandler = () => {
  let length = +document.getElementById("lenght").value;
  let numbers = [];
  let num = 2;
  while (numbers.length < length) {
    let isPrime = isPrimeNumber(false, num);
    if (isPrime) {
      numbers.push(num);
      num += 1;
    } else {
      num += 1;
    }
  }
  document.getElementById("result2").innerHTML = numbers;
};

const searchStoreHandler = () => {
  const products = [
    {
      brand: "Dunlop",
      name: "Stivali professionali",
      weight: "1",
      dimension: "variable",
    },
    {
      brand: "Dunlop",
      name: "Stivali per agricoltura",
      weight: "1.2",
      dimension: "variable",
    },
    {
      brand: "Dwens",
      name: "Scarpa antinfortunistica running",
      weight: "0.5",
      dimension: "variable",
    },
    {
      brand: "Coppi",
      name: "Scarpa antinfortunistica running",
      weight: "0.7",
      dimension: "variable",
    },
    { brand: "HM", name: "Valigetta attrezzi", weight: "4", dimension: "50cm" },
    {
      brand: "HM",
      name: "Prolunga per bussole",
      weight: "0.1",
      dimension: "5cm",
    },
    {
      brand: "HM",
      name: "Chiavi a bussola 1/2",
      weight: "0.2",
      dimension: "4cm",
    },
    {
      brand: "HM",
      name: "Chiavi combinate a cricchetto",
      weight: "0.2",
      dimension: "10cm",
    },
  ];
  let searchInput = document.getElementById("brands").value;

  if (searchInput === "defaul") {
    document.getElementById("result").innerHTML =
      "Please, select a valid brand!";
  }
  let string = "";
  products.map((product) => {
    if (product.brand === searchInput) {
      string +=
        "<div class='box'><span>Brand: " +
        product.brand +
        "</span><span>Name product: " +
        product.name +
        "</span><span>Weight: " +
        product.weight +
        "Kg</span><span>Weight: " +
        product.dimension +
        "</span></div>";
    }
  });
  document.getElementById("result").innerHTML = string;
};

const dateSelectHandler = () => {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let years = [];
  for (let i = 1900; i <= 2022; i++) {
    years.push(i);
  }

  const monthsHandler = (months) => {
    let index = 1;
    months.map((month) => {
      let option = document.createElement("option");
      option.value = index;
      option.text = month;
      document.getElementById("months").add(option);
      index += 1;
    });
  };
  monthsHandler(months);

  const daysHandler = (month) => {
    let howManyDays = {
      30: [1, 4, 6, 9, 1],
      29: [2],
      31: [3, 5, 7, 8, 10, 12],
    };
    let daysInMonth;
    for (let key of Object.keys(howManyDays)) {
      if (howManyDays[key].find((element) => element == month)) {
        daysInMonth = key;
      }
    }
    let days = [];
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }
    let selectobject = document.getElementById("days");
    for (var i = 0; i < selectobject.length; i++) {
      selectobject.remove(i);
    }
    days.map((day) => {
      let option = document.createElement("option");
      option.value = day;
      option.text = day;
      document.getElementById("days").add(option);
    });
  };
  document
    .getElementById("months")
    .addEventListener("change", () =>
      daysHandler(document.getElementById("months").value)
    );

  years.map((year) => {
    let option = document.createElement("option");
    option.value = year;
    option.text = year;
    document.getElementById("years").add(option);
  });
};

const validateDate = () => {
  let day = document.getElementById("days").value;
  let month = document.getElementById("months").value;
  let year = document.getElementById("years").value;

  let date = new Date(year, month, day);
  console.log(date.toString());
  if (date.toString() != "Invalid Date") {
    document.getElementById("result").innerHTML =
      "The date inserted is valid: " +
      date.getDate() +
      "-" +
      date.getMonth() +
      "-" +
      date.getFullYear();
  } else {
    document.getElementById("result").innerHTML = "Please insert a valid date";
  }
};


const tabellineHandler = () => {
  number = document.getElementById('num').value;
  console.log(number)
  for (let i=0; i<= 10; i++){
    let result = number * i;
    document.getElementById("x"+i).innerHTML = "<span>"+number+" X "+i+" = "+result+"</span>"
  }
  
}