// import "../node_modules/bootstrap/dist/js/bootstrap";

let amountInput = document.querySelector("#amount");
let peopleInput = document.querySelector("#people");
let result = "";

let resultText = document.querySelector("#result");
function calculate() {
  if (amountInput.value === "" || peopleInput.value === "")
    resultText.textContent =
      "Please enter amount and number of people spliting the bill";
  else if (amountInput.value !== "" && peopleInput.value !== "") {
    result = eval(`${amountInput.value} / ${peopleInput.value}`);

    resultText.textContent = `Each person must pay P${result.toFixed(2)}`;
  }
  console.log(amountInput.value);
  console.log(peopleInput.value);
}
