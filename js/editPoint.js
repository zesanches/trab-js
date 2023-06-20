function getPoint() {
  return JSON.parse(localStorage.getItem("point"));
}

function initialize() {
  const point = getPoint();
  const location = document.getElementById("location");
  const hour = document.getElementById("hour");

  location.value = point.location;
  hour.value = point.updated_at;
}

window.onload = () => initialize();

function handleEditEmployee() {
  const id = document.getElementById("inputId");
  const name = document.getElementById("inputNome");

  fetch("http://localhost:3000/employee/update", {
    method: "POST",
    body: JSON.stringify({ name: name, id: id, email: email, phone: phone }),
  });
}

const send = document.getElementById("send");
send.onclick = handleEditEmployee;
