const buttons = document.querySelectorAll('.color-slide');

buttons.forEach(button => {
  button.addEventListener('mouseover', () => {
    button.style.backgroundColor = getRandomColor();
  });
  
  button.addEventListener('mouseleave', () => {
    button.style.backgroundColor = '#3498db'; // Réinitialisation de la couleur de base au survol
  });
});

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
