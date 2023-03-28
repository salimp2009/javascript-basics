const buttonEl = document.querySelector(".btn");
const inputEl = document.querySelector(".input");
const headingEl = document.querySelector(".heading");

const number2 = 10;
const user2 = {
  name: "didoki",
  city: "Syngapore",
};

inputEl.value = "Testing input";
headingEl.insertAdjacentHTML(
  "beforebegin",
  "Javascript <span>DOM element </span> "
);

headingEl.innerHTML = `
Javascript <span>DOM element </span> 
how is this class ?
JS is fun :)
<br/>number: ${number2}
<br/> user name: ${user2.name}
`;

buttonEl.blur();
// buttonEl.focus();
// buttonEl.disabled = true;
