document.addEventListener('DOMContentLoaded', () => {
    const swatches = document.querySelectorAll('.swatch');
    
    swatches.forEach(swatch => {
      swatch.addEventListener('click', (e) => {
        const selectedColor = e.target.getAttribute('data-color');
        const card = e.target.closest('.card');
        const img = card.querySelector('img');
  
        img.src = `images/shoe-${selectedColor}.jpg`;
      });
    });
  });
  