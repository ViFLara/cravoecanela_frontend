let submitBtn = document.querySelectorAll(".submit-btn");
for (const link of submitBtn) {
  link.addEventListener("click", function () {
    CloseAllModal();
  });
}

window.addEventListener("load", function () {
  CloseAllModal();
  OpenModal("login-modal", "flex");
});

document
  .querySelectorAll(".menu-btn")[0]
  .addEventListener("click", function () {
    CloseAllModal();
    OpenModal("menu-modal", "flex");
  });

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
