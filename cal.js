const inputBox = document.getElementById('inputBox');
const buttons = document.querySelectorAll('button');

let currentInput = "";

buttons.forEach(button => {
  button.addEventListener('click', (e) => {
    const value = e.target.innerText;

    try {
      if (value === '=') {
        currentInput = eval(currentInput).toString();
        inputBox.value = currentInput;
      } 
      else if (value === 'AC') {
        currentInput = "";
        inputBox.value = "0";
      } 
      else if (value === 'DEL') {
        currentInput = currentInput.slice(0, -1);
        inputBox.value = currentInput || "0";
      } 
      else if (value === '++') {
        currentInput = (parseFloat(eval(currentInput || "0")) + 1).toString();
        inputBox.value = currentInput;
      } 
      else if (value === '--') {
        currentInput = (parseFloat(eval(currentInput || "0")) - 1).toString();
        inputBox.value = currentInput;
      }
      else if (e.target.id === 'plusminus') {
         currentInput = (parseFloat(eval(currentInput || "0")) * -1).toString();
        inputBox.value = currentInput;
      }
      else {
         if (inputBox.value === "0" && !isNaN(value)) {
          currentInput = value;
        } else {
          currentInput += value;
        }
        inputBox.value = currentInput;
      }
    } catch (error) {
      inputBox.value = "Error";
      currentInput = "";
    }
  });
});
