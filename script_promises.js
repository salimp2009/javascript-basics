console.log("promises hello!");

const p1 = new Promise((resolve, reject) => {
  const numbOfClients = 20;

  if (numbOfClients > 10) {
    resolve("Success");
  } else {
    reject("not enough advertising");
  }
});

p1.then((value) => {
  console.log(value);
}).catch((error) => {
  console.log(error);
});

const checkResults = async () => {
  try {
    const value = await p1;
    console.log(value);
  } catch (reason) {
    console.log(reason);
  }
};

checkResults();

fetch("https://reqress.in/api/users")
  .then((response) => {
    if (!response.ok) {
      return Promise.reject("4xx or 5xx problem");
    }
    return response.json();
  })
  .then((data) => console.log(data.data[2].email))
  .catch((error) => {
    console.log("Error is", error);
  });
