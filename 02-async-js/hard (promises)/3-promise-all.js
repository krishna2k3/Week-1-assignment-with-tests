/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */

function waitOneSecond() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("1s");
    }, 1000);
  });
}

function waitTwoSeconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("2s");
    }, 2000);
  });
}

function waitThreeSeconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("3s");
    }, 3000);
  });
}

function promiseAll() {
  const start = Date.now();
  Promise.all([waitOneSecond(), waitTwoSeconds(), waitThreeSeconds()]).then(
    (values) => {
      console.log(values);
      const end = Date.now();
      console.log(`Time taken: ${end - start} milliseconds`);
    }
  );
}

function calculateTime() {
  promiseAll();
}

calculateTime();
