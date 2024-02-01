// Tip Calculator

// Event Listener
document.getElementById("btn").addEventListener("click", tipCalc);

function tipCalc() {
  // Input
  let price = +document.getElementById("mealPrice").value;
  let tip = +document.getElementById("tipPerc").value;
  let people = +document.getElementById("numPeople").value;
  // Process
  let tiptotal = price * (tip / 100);
  let total = price + tiptotal;
  let tipPers = tiptotal / people;
  // Output
  document.getElementById("tipAmt").value = "$" + tiptotal;
  document.getElementById("tipPerson").value = "$" + tipPers;
  document.getElementById("totalAmt").value = "$" + total;
}

document.getElementById("btn2").addEventListener("click", clearCalc);

function clearCalc() {
  document.getElementById("mealPrice").value = "";
  document.getElementById("tipPerc").value = "";
  document.getElementById("numPeople").value = "";
  document.getElementById("tipAmt").value = "";
  document.getElementById("tipPerson").value = "";
  document.getElementById("totalAmt").value = "";
}
