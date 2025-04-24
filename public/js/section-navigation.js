// Script para manejar la navegación entre secciones y selección automática de pestañas
document.addEventListener('DOMContentLoaded', function() {
  // Función para manejar clics en enlaces con atributos data-target-section y data-target-tab
  function handleSectionNavigation() {
    // Buscar todos los enlaces que deberían tener esta funcionalidad
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        // Verificar si el enlace tiene atributos especiales
        const targetSection = this.getAttribute('data-target-section');
        const targetTab = this.getAttribute('data-target-tab');
        
        if (targetSection && targetTab) {
          e.preventDefault();
          
          // Navegar a la sección
          window.location.href = `#${targetSection}`;
          
          // Esperar a que la navegación se complete y luego seleccionar la pestaña
          setTimeout(() => {
            const sectionButtons = document.querySelectorAll(`#${targetSection} button`);
            sectionButtons.forEach(button => {
              if (button.textContent && button.textContent.includes(targetTab)) {
                button.click();
              }
            });
          }, 500);
        }
      });
    });
    
    // Comprobar si hay parámetros en la URL para la navegación directa
    const hash = window.location.hash;
    if (hash) {
      const params = new URLSearchParams(window.location.search);
      const targetTab = params.get('tab');
      
      if (targetTab) {
        const sectionId = hash.substring(1);
        setTimeout(() => {
          const sectionButtons = document.querySelectorAll(`#${sectionId} button`);
          sectionButtons.forEach(button => {
            if (button.textContent && button.textContent.includes(targetTab)) {
              button.click();
            }
          });
        }, 500);
      }
    }
  }
  
  // Inicializar la funcionalidad
  handleSectionNavigation();
});
