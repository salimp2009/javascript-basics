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
