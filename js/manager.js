// function getEmployee() {
//   return JSON.parse(localStorage.getItem("employee"));
// }

// function initialize() {
//   const employee = getEmployee();
//   const nameInput = document.getElementById("inputNome");
//   const idInput = document.getElementById("inputId");

//   nameInput.value = employee.name;
//   idInput.value = employee.id;
// }

// window.onload = () => initialize();

// function handleEditEmployee() {
//   const id = document.getElementById("inputId");
//   const name = document.getElementById("inputNome");

//   fetch("http://localhost:3000/employee/update", {
//     method: "POST",
//     body: JSON.stringify({ name: name, id: id, email: email, phone: phone }),
//   });
// }

// const send = document.getElementById("send");
// send.onclick = handleEditEmployee;
