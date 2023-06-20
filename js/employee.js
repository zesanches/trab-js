async function handleEditEmployee(e) {
  e.preventDefault();

  const name = document.getElementById("inputNome").value;
  const employer_id = document.getElementById("employer_id").value;
  const is_pj = document.getElementById("is_pj").checked;

  try {
    await fetch("http://localhost:3000/employee/create", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify({
        name: name,
        is_pj: is_pj,
        employer_id: employer_id,
      }),
    });
  } catch (e) {
    console.error(e);
  }
}

const buttonSend = document.getElementById("send");
buttonSend.onclick = (e) => handleEditEmployee(e);
