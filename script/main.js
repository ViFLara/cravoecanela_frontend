document
  .getElementById("login")
  .addEventListener("submit", async function (event) {
    event.preventDefault();
    const email = document.getElementById("login-email").value;
    const senha = document.getElementById("password").value;
    console.log(email.senha);
    const dados = {
      email: email,
      senha: senha,
    };
    console.log(JSON.stringify(dados));
    alert("Seja bem vindo!");
    window.location = "main.html";
  });

window.addEventListener("load", function () {
  CloseAllModal();
  OpenModal("login-modal", "flex");
});

// // document
// //   .querySelectorAll(".menu-btn")[0]
// //   .addEventListener("click", function () {
// //     CloseAllModal();
// //     OpenModal("menu-modal", "flex");
// //   });

function OpenModal(modalId, displayValue) {
  console.log(modalId + displayValue);
  let modalElement = document.getElementById(modalId);
  modalElement.style.display = displayValue;
}

function CloseAllModal() {
  let modalArray = document.querySelectorAll(".modal");
  for (const modal of modalArray) {
    if (modal.style.display != "none") {
      modal.style.display = "none";
    }
  }
}
