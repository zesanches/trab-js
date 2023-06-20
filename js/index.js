async function listEmployees() {
  let employees;

  try {
    const response = await fetch("http://localhost:3000/employee/", {
      method: "GET",
    });

    employees = await response.json();
  } catch (error) {
    console.log(error);
  }

  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");
  const idHeader = document.createElement("th");
  const nomeHeader = document.createElement("th");
  const actionsHeader = document.createElement("th");
  const tbody = document.createElement("tbody");
  const container = document.querySelector(".containerEmployees");

  table.classList.add("table");

  idHeader.innerHTML = "ID";
  nomeHeader.innerHTML = "Nome";
  actionsHeader.innerHTML = "Ações";
  headerRow.appendChild(idHeader);
  headerRow.appendChild(nomeHeader);
  headerRow.appendChild(actionsHeader);
  thead.appendChild(headerRow);
  table.appendChild(thead);

  if (!!employees?.length) {
    employees.forEach((employee) => {
      const row = document.createElement("tr");
      const idCell = document.createElement("td");
      const nomeCell = document.createElement("td");
      const actionsCell = document.createElement("td");
      const editLink = document.createElement("a");
      const pointLink = document.createElement("a");
      const deleteLink = document.createElement("a");

      actionsCell.setAttribute("class", "d-flex gap-3 p-3");

      editLink.setAttribute("class", "icon-link icon-link-hover");

      pointLink.setAttribute("class", "icon-link icon-link-hover");

      deleteLink.setAttribute("data-bs-toggle", "modal");
      deleteLink.setAttribute("data-bs-target", "#exampleModal");
      deleteLink.setAttribute("class", "icon-link icon-link-hover");
      deleteLink.setAttribute("style", "cursor: pointer");

      editLink.id = employee.id;
      pointLink.id = employee.id;
      deleteLink.id = employee.id;

      editLink.onclick = () => {
        localStorage.setItem("employee", JSON.stringify(employee));
      };

      pointLink.onclick = () => {
        localStorage.setItem("employee", JSON.stringify(employee));
      };

      deleteLink.onclick = () => {
        localStorage.setItem("employee", JSON.stringify(employee));
      };

      editLink.href =
        "file:///Users/josesanches/Desktop/aulaJs/editEmployee.html";
      editLink.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16"><path d="M11.646 2.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-9 9a.5.5 0 0 1-.354.146H2.5a.5.5 0 0 1-.5-.5V12a.5.5 0 0 1 .146-.354l9-9z"/><path fill-rule="evenodd" d="M12.854.146a1.5 1.5 0 0 1 2.12 0l1 1a1.5 1.5 0 0 1 0 2.122l-9 9a1.5 1.5 0 0 1-2.122 0l-1-1a1.5 1.5 0 0 1 0-2.122l9-9z"/></svg>';
      pointLink.href = "file:///Users/josesanches/Desktop/aulaJs/point.html";
      pointLink.innerHTML = `<svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-clock-history"
          viewBox="0 0 16 16"
        >
          <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z" />
          <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z" />
          <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z" />
        </svg>`;
      deleteLink.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
      <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
      </svg>`;
      idCell.innerHTML = employee.id;
      nomeCell.innerHTML = employee.name;
      actionsCell.appendChild(editLink);
      actionsCell.appendChild(pointLink);
      actionsCell.appendChild(deleteLink);
      row.appendChild(idCell);
      row.appendChild(nomeCell);
      row.appendChild(actionsCell);
      tbody.appendChild(row);
    });
  }

  table.appendChild(tbody);

  container.innerHTML = "";
  container.appendChild(table);
}

async function listManagers() {
  let employees;

  try {
    const response = await fetch("http://localhost:3000/employee/", {
      method: "GET",
    });

    employees = await response.json();
  } catch (error) {
    console.log(error);
  }

  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");
  const idHeader = document.createElement("th");
  const nomeHeader = document.createElement("th");
  const actionsHeader = document.createElement("th");
  const tbody = document.createElement("tbody");
  const container = document.querySelector(".containerEmployees");

  table.classList.add("table");

  idHeader.innerHTML = "ID";
  nomeHeader.innerHTML = "Nome";
  actionsHeader.innerHTML = "Ações";
  headerRow.appendChild(idHeader);
  headerRow.appendChild(nomeHeader);
  headerRow.appendChild(actionsHeader);
  thead.appendChild(headerRow);
  table.appendChild(thead);

  if (!!employees?.length) {
    employees.forEach((employee) => {
      const row = document.createElement("tr");
      const idCell = document.createElement("td");
      const nomeCell = document.createElement("td");
      const actionsCell = document.createElement("td");
      const editLink = document.createElement("a");
      const deleteLink = document.createElement("a");

      actionsCell.setAttribute("class", "d-flex gap-3 p-3");

      editLink.setAttribute("class", "icon-link icon-link-hover");

      deleteLink.setAttribute("data-bs-toggle", "modal");
      deleteLink.setAttribute("data-bs-target", "#exampleModal");
      deleteLink.setAttribute("class", "icon-link icon-link-hover");
      deleteLink.setAttribute("style", "cursor: pointer");

      editLink.id = employee.id;
      deleteLink.id = employee.id;

      editLink.onclick = () => {
        localStorage.setItem("employee", JSON.stringify(employee));
      };

      deleteLink.onclick = () => {
        localStorage.setItem("employee", JSON.stringify(employee));
      };

      editLink.href =
        "file:///Users/josesanches/Desktop/aulaJs/editEmployee.html";
      editLink.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16"><path d="M11.646 2.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-9 9a.5.5 0 0 1-.354.146H2.5a.5.5 0 0 1-.5-.5V12a.5.5 0 0 1 .146-.354l9-9z"/><path fill-rule="evenodd" d="M12.854.146a1.5 1.5 0 0 1 2.12 0l1 1a1.5 1.5 0 0 1 0 2.122l-9 9a1.5 1.5 0 0 1-2.122 0l-1-1a1.5 1.5 0 0 1 0-2.122l9-9z"/></svg>';
      deleteLink.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
      <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
      </svg>`;
      idCell.innerHTML = employee.id;
      nomeCell.innerHTML = employee.name;
      actionsCell.appendChild(editLink);
      actionsCell.appendChild(deleteLink);
      row.appendChild(idCell);
      row.appendChild(nomeCell);
      row.appendChild(actionsCell);
      tbody.appendChild(row);
    });
  }

  table.appendChild(tbody);

  container.innerHTML = "";
  container.appendChild(table);
}

function deleteEmployee() {
  const employee = JSON.parse(localStorage.getItem("employee"));

  fetch("http://localhost:3000/employee/delete", {
    method: "POST",
    body: JSON.stringify({ id: employee.id }),
  });
}

const confirmDeleteEmployee = document.getElementById("confirm-delete");

confirmDeleteEmployee.onclick = deleteEmployee;
