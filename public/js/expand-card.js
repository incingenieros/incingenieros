// Script para expandir automáticamente la tarjeta de Asistencia Técnica Internacional
document.addEventListener('DOMContentLoaded', function() {
  // Función para expandir la tarjeta específica
  window.expandAsistenciaTecnicaCard = function() {
    // Dar tiempo para que la página se cargue completamente
    setTimeout(() => {
      // Buscar todas las tarjetas en la sección de consultoría
      const consultoriaCards = document.querySelectorAll('#consultoria article');
      
      // Variable para rastrear si encontramos la tarjeta
      let targetCardFound = false;
      
      // Iterar sobre todas las tarjetas
      consultoriaCards.forEach((card) => {
        // Buscar el título de la tarjeta
        const title = card.querySelector('h3');
        
        // Verificar si es la tarjeta "Asistencia Técnica Internacional"
        if (title && title.textContent && title.textContent.includes('Asistencia Técnica Internacional')) {
          targetCardFound = true;
          
          // Aplicar estilos directamente para simular el hover
          // Expandir la imagen
          const imageContainer = card.querySelector('div[class*="relative w-full overflow-hidden"]');
          if (imageContainer) {
            imageContainer.classList.remove('h-0', 'opacity-0');
            imageContainer.classList.add('h-48', 'opacity-100', 'mb-4');
          }
          
          // Expandir las estadísticas
          const statsContainer = card.querySelector('div[class*="grid grid-cols-2 gap-3"]');
          if (statsContainer) {
            statsContainer.classList.remove('max-h-0', 'opacity-0', 'transform', 'translate-y-4', 'overflow-hidden');
            statsContainer.classList.add('max-h-40', 'opacity-100', 'transform', 'translate-y-0');
          }
          
          // Cambiar el fondo de la tarjeta
          card.classList.add('bg-indigo-600/20');
          
          // Hacer scroll a la tarjeta para asegurar que sea visible
          card.scrollIntoView({ behavior: 'smooth', block: 'center' });
          
          // Mantener la tarjeta expandida
          const originalMouseLeave = card.onmouseleave;
          card.onmouseleave = null;
          
          // Restaurar el comportamiento normal después de 5 segundos
          setTimeout(() => {
            card.onmouseleave = originalMouseLeave;
          }, 5000);
        }
      });
      
      // Si no encontramos la tarjeta, intentar de nuevo después de un tiempo
      if (!targetCardFound) {
        setTimeout(window.expandAsistenciaTecnicaCard, 500);
      }
    }, 500);
  };
});
