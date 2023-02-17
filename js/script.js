
const buttons = document.getElementsByClassName("btn-main");
for (let btn of buttons) {
  btn.addEventListener("click", function (e) {
    const inputField = document.getElementById("input-field");
    const numberValue = e.target.innerText;
    const inputString = inputField.value + numberValue;

    if (numberValue === "DEL") {
      inputField.value = "";
    } else if (numberValue === "BACK") {
      const inputValue = inputField.value;
      const inputValueString = inputValue.split("");
      inputValueString.pop();
      const newInputValue = inputValueString.join("");
      inputField.value = newInputValue;
    } else if (numberValue === "=") {
      const inputValue = inputField.value;
      const result = eval(inputValue);
      if (Number.isInteger(result)) {
        inputField.value = result;
      } else {
        const result = eval(inputValue).toFixed(2);
        inputField.value = result;
      }
    } else {
      inputField.value = inputString;
    }
  });
}
