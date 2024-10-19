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
  