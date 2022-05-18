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
const dataModalHandler = (userData) => {
  document.getElementById("modalUsername").innerHTML = userData.username;
  document.getElementById("modalPassword").innerHTML = userData.password;
  document.getElementById("modalCheck").innerHTML = userData.checkbox;
  document.getElementById("modalDate").innerHTML = userData.date;
  openModal();
};

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

const displayContent = (id) => {
  const frames = [
    { id: "form", url: "./form.html" },
    { id: "operations", url: "./operations.html" },
    { id: "user-check", url: "./usercheck.html" },
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
    const adminList = ['admin','marco']
    const username = document.getElementById('user').value
    

    let match = adminList.find(user => user === username)
    if (match){
        document.getElementById('user-check-result').innerHTML = "<p>The user inserted is an admin</p>"
    } else {
        document.getElementById('user-check-result').innerHTML = "<p>The user inserted is not an admin</p>"
    }
}