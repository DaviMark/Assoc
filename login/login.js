// Referências aos elementos
const introScreen = document.getElementById("intro-screen");
const loginScreen = document.getElementById("login-screen");
const assocBtn = document.getElementById("assoc-btn");
const clienteBtn = document.getElementById("cliente-btn");
const welcomeText = document.getElementById("welcome-text");
const loginForm = document.getElementById("login-form");

// Lista de usuários de teste (com diferentes nomes e senhas)
const users = [
  { username: "admin", password: "1234", redirectTo: "/admin-page.html" },
  { username: "thiago", password: "thiago2024", redirectTo: "/appthiago.html" },
  { username: "user2", password: "senha2", redirectTo: "/user2-page.html" },
  { username: "user3", password: "senha3", redirectTo: "/user3-page.html" },
  { username: "mochileiro", password: "aventura", redirectTo: "/mochileiro-page.html" },
];

// Ação ao clicar no botão "Você é um Assoc?"
assocBtn.addEventListener("click", () => {
  introScreen.classList.add("hidden");
  loginScreen.classList.remove("hidden");
  welcomeText.textContent = "Bem-vindo, mochileiro!";
});

// Ação ao clicar no botão "Você é um Cliente?"
clienteBtn.addEventListener("click", () => {
  introScreen.classList.add("hidden");
  loginScreen.classList.remove("hidden");
  welcomeText.textContent = "Bem-vindo, cliente Assoc!";
});

// Validação do formulário de login
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value.trim().toLowerCase();
  const password = document.getElementById("password").value;

  // Verifica se o usuário e senha são válidos
  const userFound = users.find(
    (user) =>
      user.username.toLowerCase() === username && user.password === password
  );

  if (userFound) {
    // Notificação de sucesso (Usando Notyf)
    new Notyf().success('Login realizado com sucesso!');
    
    // Redireciona para a página específica do usuário
    window.location.href = userFound.redirectTo; // Redireciona para a página específica
    
  } else {
    // Notificação de erro
    new Notyf().error('Usuário ou senha inválidos.');
  }
});
