const startButton = document.querySelector(".startButton");
const evenColumn = document.querySelector(".evenColumn .columnContent");
const oddColumn = document.querySelector(".oddColumn .columnContent");

function generateNumbers(min, max, howMany) {
  let returnArray = [];
  for (let i = 0; i < howMany; i++) {
    returnArray.push(Math.floor(min + Math.random() * max));
  }
  return returnArray;
}

function splitAndSortNumbers(numbers, sortOrder) {
  let evenArray = [];
  let oddArray = [];
  numbers.forEach((number) =>
    number % 2 === 0 ? evenArray.push(number) : oddArray.push(number)
  );
  if (sortOrder === "ascending") {
    evenArray.sort((a, b) => a - b);
    oddArray.sort((a, b) => a - b);
  }
  if (sortOrder === "descending") {
    evenArray.sort((a, b) => b - a);
    oddArray.sort((a, b) => b - a);
  }
  return [evenArray, oddArray];
}

function assignNumbers(numbers) {
  numbers[0].forEach((number) => {
    const numberDisplay = document.createElement("div");
    numberDisplay.innerHTML = number;
    evenColumn.appendChild(numberDisplay);
  });
  numbers[1].forEach((number) => {
    const numberDisplay = document.createElement("div");
    numberDisplay.innerHTML = number;
    oddColumn.appendChild(numberDisplay);
  });
}

startButton.addEventListener("click", () => {
  evenColumn.innerHTML = "";
  oddColumn.innerHTML = "";
  assignNumbers(splitAndSortNumbers(generateNumbers(1, 100, 20), "ascending"));
});
