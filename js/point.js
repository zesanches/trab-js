function getEmployee() {
  return JSON.parse(localStorage.getItem("employee"));
}

function initialize() {
  const employee = getEmployee();
  const nameInput = document.getElementById("inputNome");
  const idInput = document.getElementById("inputId");

  nameInput.value = employee.name;
  idInput.value = employee.id;
}

window.onload = initialize();
