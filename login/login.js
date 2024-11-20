// Referências aos elementos
const introScreen = document.getElementById("intro-screen");
const loginScreen = document.getElementById("login-screen");
const assocBtn = document.getElementById("assoc-btn");
const clienteBtn = document.getElementById("cliente-btn");
const welcomeText = document.getElementById("welcome-text");
const loginForm = document.getElementById("login-form");

// Ação ao clicar no botão "Você é um Assoc?"
assocBtn.addEventListener("click", () => {
  introScreen.classList.add("hidden");
  loginScreen.classList.remove("hidden");
  welcomeText.textContent = "Bem-vindo Mochileiro!";
});

// Ação ao clicar no botão "Você é um Cliente?"
clienteBtn.addEventListener("click", () => {
  introScreen.classList.add("hidden");
  loginScreen.classList.remove("hidden");
  welcomeText.textContent = "Bem-vindo Cliente Assoc!";
});

// Validação do formulário
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "admin" && password === "1234") {
    alert("Login realizado com sucesso!");
  } else {
    alert("Usuário ou senha inválidos.");
  }
});
