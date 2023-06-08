// exe 1 : Emloyee Salary
function exe1() {
  let salary = +document.getElementById("input-salary").value;
  let day = +document.getElementById("input-day").value;
  let totalSalary = 0;
  totalSalary = salary * day;
  document.getElementById("result-exe1").innerHTML =
    totalSalary.toLocaleString() + " " + "VND";
}

// exe2 : The Average Value
function exe2() {
  let valueEl1 = +document.getElementById("input-value-1").value;
  let valueEl2 = +document.getElementById("input-value-2").value;
  let valueEl3 = +document.getElementById("input-value-3").value;
  let valueEl4 = +document.getElementById("input-value-4").value;
  let valueEl5 = +document.getElementById("input-value-5").value;
  let average = 0;
  average = (valueEl1 + valueEl2 + valueEl3 + valueEl4 + valueEl5) / 5;
  document.getElementById("result-exe2").innerHTML = average.toLocaleString();
}

// exe3 : Currency Exchange
function exe3() {
  let usdEl = +document.getElementById("input-USD").value;
  let exchange = 0;
  exchange = usdEl * 23500;
  document.getElementById(
    "result-exe3"
  ).innerHTML = ` ${exchange.toLocaleString()} VND ;`;
}

// exe4 :  Area & Perimeter
function exe4() {
  let lengthEl = +document.getElementById("input-length").value;
  let widthEl = +document.getElementById("input-width").value;
  let area = 0;
  let perimeter = 0;
  area = lengthEl * widthEl;
  perimeter = (lengthEl + widthEl) * 2;
  document.getElementById("result-exe4").innerHTML = area.toLocaleString();
  document.getElementById("result-exe4-1").innerHTML =
    perimeter.toLocaleString();
}

// exe5 : Total Digits
function exe5() {
  let number = +document.getElementById("input-number").value;
  let fristNumb = 0;
  let secondNumb = 0;
  fristNumb = Math.floor(number / 10);
  secondNumb = number % 10;
  let total = 0;
  total = fristNumb + secondNumb;
  document.getElementById("result-exe5").innerHTML = total.toLocaleString();
}
