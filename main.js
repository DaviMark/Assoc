  // Mostrar e ocultar o chat
  document.querySelector('.chat-icon').addEventListener('click', () => {
    document.querySelector('.chat-widget').style.display = 'flex';
    document.querySelector('.chat-icon').style.display = 'none';
  });

  document.querySelector('.chat-close-btn').addEventListener('click', () => {
    document.querySelector('.chat-widget').style.display = 'none';
    document.querySelector('.chat-icon').style.display = 'block';
  });

  // Respostas predefinidas
  const responses = {
    "qual é o seu nome?": "Eu sou o assistente virtual da Vetro! 🤖",
    "quais serviços vocês oferecem?": "Oferecemos soluções de tecnologia sustentável para um futuro inclusivo. 🌱",
    "como posso entrar em contato?": "Você pode nos contatar pelo nosso e-mail contato@vetro.com ou telefone (11) 1234-5678. 📞",
  };

  // Enviar mensagem
  document.getElementById('send-btn').addEventListener('click', () => {
    const inputField = document.getElementById('chat-input');
    const message = inputField.value.trim().toLowerCase();
    
    if (message) {
      addMessage('Você', message, 'user');
      inputField.value = '';

      // Adiciona um ícone de carregamento
      const loadingMessage = document.createElement('div');
      loadingMessage.classList.add('chat-message', 'bot');
      loadingMessage.textContent = "Carregando...";
      document.querySelector('.chat-body').appendChild(loadingMessage);
      document.querySelector('.chat-body').scrollTop = document.querySelector('.chat-body').scrollHeight;

      setTimeout(() => {
        const botResponse = responses[message] || "Desculpe, não entendi sua pergunta. 😕";
        loadingMessage.remove(); // Remove o ícone de carregamento
        addMessage('Bot', botResponse, 'bot');
      }, 1000); // Atraso para simular carregamento
    }
  });

  function addMessage(sender, message, type) {
    const chatBody = document.querySelector('.chat-body');
    const messageElement = document.createElement('div');
    messageElement.classList.add('chat-message', type);
    messageElement.textContent = `${sender}: ${message}`;
    chatBody.appendChild(messageElement);
    chatBody.scrollTop = chatBody.scrollHeight;

    // Animação de entrada
    messageElement.style.opacity = 0;
    setTimeout(() => {
      messageElement.style.transition = "opacity 0.5s, transform 0.3s";
      messageElement.style.opacity = 1;
      messageElement.style.transform = "translateY(0)";
    }, 10);
  }
const chatIcon = document.querySelector('.chat-icon');
const chatWidget = document.querySelector('.chat-widget');
const chatBalloon = document.querySelector('.chat-balloon');
const closeBtn = document.querySelector('.chat-close-btn');
const chatInput = document.getElementById('chat-input');
const sendBtn = document.getElementById('send-btn');
const chatBody = document.querySelector('.chat-body');

// Abrir o chat
chatIcon.addEventListener('click', () => {
  chatWidget.style.display = 'flex';
  chatBalloon.style.display = 'none'; // Esconder o balão ao abrir o chat
});

// Fechar o chat
closeBtn.addEventListener('click', () => {
  chatWidget.style.display = 'none';
  chatBalloon.style.display = 'block'; // Mostrar o balão ao fechar o chat
});

// Enviar mensagem ao clicar no botão
sendBtn.addEventListener('click', sendMessage);

// Enviar mensagem ao pressionar Enter
chatInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    sendMessage();
  }
});

function sendMessage() {
  const userMessage = chatInput.value.trim();
  if (userMessage) {
    const userMessageElement = document.createElement('div');
    userMessageElement.className = 'chat-message user';
    userMessageElement.textContent = userMessage;
    chatBody.appendChild(userMessageElement);
    chatInput.value = ''; // Limpa o campo de entrada

    // Resposta do bot (exemplo estático, você pode personalizar)
    const botResponse = getBotResponse(userMessage);
    const botMessageElement = document.createElement('div');
    botMessageElement.className = 'chat-message bot';
    botMessageElement.textContent = botResponse;
    chatBody.appendChild(botMessageElement);

    chatBody.scrollTop = chatBody.scrollHeight; // Rola para a última mensagem
  }
}

// Função de exemplo para resposta do bot
function getBotResponse(userMessage) {
  // Adicione sua lógica de resposta aqui
  return "Obrigado pela sua pergunta!"; // Resposta padrão
}


// Chat
const chatballoon = document.querySelector('.chat-balloon');
const chaticon = document.querySelector('.chat-icon');

// Mostra o balão ao carregar a página
setTimeout(() => {
  chatballoon.classList.add('show'); // Adiciona a classe show
}, 1000); // Atraso de 1 segundo para aparecer

// Adiciona animação ao clicar no balão
chatballoon.addEventListener('click', () => {
  chatballoon.classList.add('float-away'); // Adiciona a classe para flutuar
  setTimeout(() => {
    chatballoon.classList.remove('show', 'float-away'); // Remove as classes após a animação
  }, 600); // Tempo para a animação de saída
});

// Alterna a visibilidade do balão quando o chat é aberto
chatIcon.addEventListener('click', () => {
  chatballoon.classList.remove('show'); // Esconde o balão quando o chat é aberto
});

document.addEventListener('DOMContentLoaded', function () {
  const toggler = document.querySelector('.navbar-toggler');
  const navList = document.querySelector('.nav-list');

  toggler.addEventListener('click', function () {
    navList.classList.toggle('active'); // Alterna a classe active
  });
});

// Para nao ver o codigo fonte

document.addEventListener('contextmenu', function(e) {
  e.preventDefault(); // Impede o menu de contexto (botão direito do mouse)
});