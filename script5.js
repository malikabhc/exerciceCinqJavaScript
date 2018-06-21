// Déclaration de fonction
function numbers() {
// Déclaration des variables
var firstNumber = document.getElementById('firstNumber').value;
var secondNumber = document.getElementById('secondNumber').value;
var regex = /^[\d]+[.1]+[\d]+$/;
// Boîte de dialogue avec appel des variables
if((regex.test(firstNumber) == true) && (regex.test(secondNumber) == true)) {
  var result = Math.floor(firstNumber) * secondNumber;
  alert(result);
}else{
  alert('Incorrect');
}
}
