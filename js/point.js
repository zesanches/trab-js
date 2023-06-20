function getEmployee() {
  return JSON.parse(localStorage.getItem("employee"));
}

function getPoint() {
  return JSON.parse(localStorage.getItem("point"));
}

async function listPoints() {
  let points;
  const employee = getEmployee();

  try {
    const response = await fetch(
      `http://localhost:3000/ponto/employee/${employee.id}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
        },
      }
    );

    points = await response.json();
  } catch (error) {
    console.log(error);
  }

  const tbody = document.getElementById("pontosBody");

  if (!!points?.length) {
    points.forEach((point) => {
      const row = document.createElement("tr");
      const locationCell = document.createElement("td");
      const created_atCell = document.createElement("td");
      const actionsCell = document.createElement("td");
      const editLink = document.createElement("a");
      const deleteLink = document.createElement("a");

      actionsCell.setAttribute("class", "d-flex gap-3 p-3");

      editLink.setAttribute("class", "icon-link icon-link-hover");

      deleteLink.setAttribute("data-bs-toggle", "modal");
      deleteLink.setAttribute("data-bs-target", "#exampleModal");
      deleteLink.setAttribute("class", "icon-link icon-link-hover");
      deleteLink.setAttribute("style", "cursor: pointer");

      editLink.id = point.id;
      deleteLink.id = point.id;

      editLink.onclick = () => {
        localStorage.setItem("point", JSON.stringify(point));
      };

      deleteLink.onclick = () => {
        localStorage.setItem("point", JSON.stringify(point));
      };

      editLink.href = "file:///Users/josesanches/Desktop/aulaJs/editPoint.html";
      editLink.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16"><path d="M11.646 2.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-9 9a.5.5 0 0 1-.354.146H2.5a.5.5 0 0 1-.5-.5V12a.5.5 0 0 1 .146-.354l9-9z"/><path fill-rule="evenodd" d="M12.854.146a1.5 1.5 0 0 1 2.12 0l1 1a1.5 1.5 0 0 1 0 2.122l-9 9a1.5 1.5 0 0 1-2.122 0l-1-1a1.5 1.5 0 0 1 0-2.122l9-9z"/></svg>';
      deleteLink.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
      <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
      </svg>`;
      locationCell.innerHTML = point.location;
      created_atCell.innerHTML = point.created_at;
      actionsCell.appendChild(editLink);
      actionsCell.appendChild(deleteLink);
      row.appendChild(locationCell);
      row.appendChild(created_atCell);
      row.appendChild(actionsCell);
      tbody.appendChild(row);
    });
  }
}

function initialize() {
  const employee = getEmployee();
  const nameInput = document.getElementById("inputNome");
  const idInput = document.getElementById("inputId");

  listPoints();

  nameInput.value = employee.name;
  idInput.value = employee.id;
}

function deletePoint() {
  const point = getPoint();

  fetch("http://localhost:3000/employee/delete", {
    method: "POST",
    body: JSON.stringify({ id: point.id }),
  });
}

const confirmDeleteEmployee = document.getElementById("confirm-delete");
confirmDeleteEmployee.onclick = deletePoint;

window.onload = initialize();

async function handleRegisterPoint(e) {
  e.preventDefault();

  const inputLocalizacao = document.getElementById("inputLocalizacao");
  const employee = getEmployee();

  try {
    await fetch(`http://localhost:3000/ponto/create`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify({
        employee_id: employee.id,
        location: inputLocalizacao.value,
      }),
    });
  } catch (e) {}
}

const registerPointButton = document.getElementById("register-point");
registerPointButton.onclick = (e) => handleRegisterPoint(e);
