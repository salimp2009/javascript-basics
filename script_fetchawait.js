const btnEl = document.querySelector(".btn");
console.log(btnEl);
const clickHandler = () => {
  console.log(btnEl.textContent);
  fetch("https://reqres.in/api/users")
    .then((response) => {
      // console.log(response);
      return response.json();
    })
    .then((data) => {
      console.log(data.data[3].first_name);
      // console.log(JSON.stringify(data));
    });
};

btnEl.addEventListener("click", clickHandler);
