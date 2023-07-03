const inputNum2 = document.querySelector('#num2');
const inputNum1 = document.querySelector('#num1');
const bmibtn = document.querySelector('#opt2');

function calculateSum() {
  var num1 = parseFloat(document.getElementById('num1').value);
  var num2 = parseFloat(document.getElementById('num2').value);
  var state;
  
  if (isNaN(num1) || isNaN(num2)) {
      document.getElementById('result').textContent = "Please enter valid numbers.";
      document.getElementById('result1').textContent = "";
  } else {
      var sum = num1/(num2*num2);
      if (sum <18.5) {
        result1.style.color = 'yellow'; 
        state="underweight";
    } 
    else if (sum >= 18.5 && sum <= 24.9) {
        result1.style.color = 'lime'; 
        state="healthy";
    }
      else if (sum >= 25 && sum <= 29.9) {
        result1.style.color = 'yellow'; 
        state="overweight";
    }
     else if (sum >= 30 && sum <= 39.9) {
        result1.style.color = 'darkorange';
        state="obesity";
    } 
    else if (sum >= 40) {
        result1.style.color = 'red';
        state="severe obesity";
    } 
    else { 
      state="";
    }
      document.getElementById('result').textContent = "Your BMI is " + sum.toFixed(2);
      document.getElementById('result1').textContent = state;
  }
}

bmibtn.addEventListener('click', (e) =>{
  e.preventDefault();
  inputNum1.focus();
});

const manageOnEnter = (e)=>{
    e.preventDefault();
    if(e.key == 'Enter'){
      const jump = inputNum1.value==="" && inputNum2.value!=="" ? inputNum1: inputNum2;
      if((inputNum1.value=="" || inputNum2.value=="")) jump.focus();
      else document.querySelector("#button1").click();
    }
};

if (window.innerWidth > 450){
  inputNum1.addEventListener('keyup', manageOnEnter);
  inputNum2.addEventListener('keyup', manageOnEnter);
}