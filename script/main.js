document
  .getElementById("login")
  .addEventListener("submit", async function (event) {
    event.preventDefault();
    const email = document.getElementById("login-email").value;
    const senha = document.getElementById("password").value;
    const dados = {
      email,
      senha,
    };
    const response = await fetch("localhost:8080/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dados),
    });
  });

// const response = await fetch("https://chocode.herokuapp.com/entregadores/login", {
//   method: "POST",
//   headers: {
//       "Accept": "application/json",
//       "Content-Type": "application/json"
//   },
//   body: JSON.stringify(dados)
// })
// let data;
// if (response.status !== 200) {
//   msglogin.textContent = "Dados inválidos";
// }
// if (response.ok) {
//   data = await response.json();
//   localStorage.setItem("token", data.token);
//   localStorage.setItem("entregador", data.id);
//   localStorage.setItem("urlEntregador", data.urlImage);
//   localStorage.setItem("nomeEntregador", data.nome);
//   rodar();
// }
// const btn = document.querySelector(".submit-btn");
// const form = document.querySelector(".formLogin");
// const email = document.querySelector(".login-email");
// const senha = document.querySelector(".password");

// console.log(email.value, senha.value);

// let submitBtn = document.querySelectorAll(".submit-btn");
// for (const link of submitBtn) {
//   link.addEventListener("click", function () {
//     CloseAllModal();
//   });
// }

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
