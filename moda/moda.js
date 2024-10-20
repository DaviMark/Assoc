// Função para detectar a rolagem da página e aplicar a animação
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.moda-section-full, .moda-section');
    
    sections.forEach(section => {
      const sectionPosition = section.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;
      
      if (sectionPosition < screenPosition) {
        section.classList.add('active');
      }
    });
  });
  
  // Função para voltar ao topo
  document.querySelector('.subir').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // scroll suave
    });
  });

  // Função para exibir/ocultar o botão com base no scroll
  window.addEventListener('scroll', function() {
    const button = document.querySelector('.subir a');
    if (window.scrollY > 300) {
      button.classList.add('show');
      button.classList.remove('hide');
    } else {
      button.classList.remove('show');
      button.classList.add('hide');
    }
  });


  function scrollToNextSection() {
    const nextSection = document.getElementById('page2');
    nextSection.scrollIntoView({
      behavior: 'smooth', // Habilita a rolagem suave
      block: 'start',     // Alinha o topo da seção ao topo da janela
      inline: 'nearest'
    });
  }