// Script para manejar la navegación personalizada entre secciones
document.addEventListener('DOMContentLoaded', function() {
  // Configurar la primera tarjeta de Diseño Naval para saltar a la sección Industrial
  const setupDisenoNavalCard = () => {
    // Buscar la primera tarjeta en la sección de Experiencia (Diseño Naval)
    const experienciaSection = document.getElementById('experiencia');
    if (!experienciaSection) return;
    
    const cards = experienciaSection.querySelectorAll('a.group\\/card');
    if (cards.length === 0) return;
    
    // La primera tarjeta es Diseño Naval
    const disenoNavalCard = cards[0];
    if (!disenoNavalCard) return;
    
    // Configurar el evento de clic
    disenoNavalCard.setAttribute('href', '#industrial');
    disenoNavalCard.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Navegar a la sección Industrial
      window.location.href = '#industrial';
      
      // Esperar a que la navegación se complete y seleccionar el botón Procesos Constructivos
      setTimeout(() => {
        const industrialButtons = document.querySelectorAll('#industrial button');
        industrialButtons.forEach(button => {
          if (button.textContent && button.textContent.includes('Procesos Constructivos')) {
            button.click();
          }
        });
      }, 500);
    });
  };
  
  // Inicializar la funcionalidad
  setupDisenoNavalCard();
  
  // También configurar para cuando la página se cargue completamente
  window.addEventListener('load', setupDisenoNavalCard);
});
