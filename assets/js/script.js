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
    document
      .getElementById("button-modal")
      .classList.remove("visually-hidden");
  }
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
    document.getElementById("error-username").innerHTML =
      "<p id='error-username' class='error'>Please insert a valid username</p>";
  } else {
    validityForm.username = true;
    document.getElementById("error-username").innerHTML =
      "<p id='error-username'></p>";
  }
  if (password.trim() == "") {
    validityForm.password = false;
    document.getElementById("error-password").innerHTML =
      "<p id='error-password' class='error'>Please insert a valid password</p>";
  } else {
    validityForm.password = true;
    document.getElementById("error-password").innerHTML =
      '<p id="error-password"></p>';
  }
  if (check != true) {
    validityForm.check = false;
    document.getElementById("error-check").innerHTML =
      "<p id='error-check' class='error'>Please check the box</p>";
  } else {
    validityForm.check = true;
    document.getElementById("error-check").innerHTML =
      '<p id="error-check"></p>';
  }
  if (date == "") {
    validityForm.date = false;
    document.getElementById("error-date").innerHTML =
      "<p id='error-date' class='error'>Please insert a valid date</p>";
  } else {
    validityForm.date = true;
    document.getElementById("error-date").innerHTML = '<p id="error-date"></p>';
  }

  const validate =
    validityForm.username &&
    validityForm.password &&
    validityForm.check &&
    validityForm.date;
  return validate;
};

async function fetchPostData(insertData) {
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
}

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
    document.getElementById("formUsername").innerHTML = loadedData[-1].username;
    document.getElementById("formPassword").innerHTML = loadedData[-1].password;
    document.getElementById("formCheck").innerHTML = loadedData[-1].checkbox;
    document.getElementById("formDate").innerHTML = loadedData[-1].date;
  } catch (error) {
    console.log("Something");
  }
};

const displayContent = (id) => {
  const frameIds = ["form"];
  frameIds.map((frameId) => {
    if (frameId != id) {
      document.getElementById(frameId).classList.add("visually-hidden");
    } else {
        document.getElementById(frameId).classList.remove("visually-hidden")
    }
  });
};
