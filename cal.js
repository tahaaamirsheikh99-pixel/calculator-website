const inputBox = document.getElementById('inputBox');
const buttons = document.querySelectorAll('button');

let string = "";

buttons.forEach(button => {
  button.addEventListener('click', (e) => {
    let btnText = e.target.innerText;

    try {
      if (btnText === '=') {
        string = eval(string).toString();
        inputBox.value = string;
      } 
      else if (btnText === 'AC') {
        string = "";
        inputBox.value = "0";
      } 
      else if (btnText === 'DEL') {
        string = string.slice(0, -1);
        inputBox.value = string || "0";
      } 
      else if (btnText === '++') {
           string = (parseFloat(eval(string || "0")) + 1).toString();
        inputBox.value = string;
      } 
      else if (btnText === '--') {
    
        string = (parseFloat(eval(string || "0")) - 1).toString();
        inputBox.value = string;
      }
      else if (e.target.id === 'plusminus') {
        
        string = (parseFloat(eval(string || "0")) * -1).toString();
        inputBox.value = string;
      }
      else {
   
        if (inputBox.value === "0" && btnText !== ".") {
          string = btnText;
        } else {
          string += btnText;
        }
        inputBox.value = string;
      }
    } catch (err) {
      inputBox.value = "Error";
      string = "";
    }
  });
});
