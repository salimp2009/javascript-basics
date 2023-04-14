const btnEl = document.querySelector(".btn");
const btnSubmitEl = document.querySelector(".btn_submit");

const newUser = {
  name: "Salitos",
  job: "Programmer",
};

// traditional .then for async event; prefer newer method with await
const clickHandler = () => {
  fetch("https://reqres.in/api/users")
    .then((response) => {
      // console.log(response);
      if (!response.ok) {
        console.log("Something went wrong");
        return;
      }
      return response.json();
    })
    .then((data) => {
      console.log(data.data[3].first_name);
      // console.log(JSON.stringify(data));
    })
    .catch((error) => console.log(error));
};

const clickHandler2 = async () => {
  try {
    const response = await fetch("https://reqres.in/api/users");
    const data = await response.json();

    if (!response.ok) {
      console.log(data.description);
      return;
    }
    console.log(data.data[3].first_name);
    // console.log(JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
};

const submitHandler = async () => {
  try {
    const response = await fetch("https://reqres.in/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });

    const data = await response.json();

    if (!response.ok) {
      console.log(data.description);
      return;
    }
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

btnEl.addEventListener("click", clickHandler2);
btnSubmitEl.addEventListener("click", submitHandler);
