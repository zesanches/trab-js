async function handleEditEmployee(e) {
  e.preventDefault();

  const name = document.getElementById("inputNome").value;
  const employer_id = document.getElementById("employer_id").value;
  const is_pj = document.getElementById("is_pj").checked;

  try {
    fetch("http://localhost:3000/employee/create", {
      method: "POST",
      body: JSON.stringify({ name, employer_id, is_pj }),
    });
  } catch (e) {
    console.error(e);
  }
}

const buttonSend = document.getElementById("send");
buttonSend.onclick = (e) => handleEditEmployee(e);
