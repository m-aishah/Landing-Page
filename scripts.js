function toggleExpand(card) {
    card.classList.toggle('expanded');
  }

  document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.project-card');
  cards.forEach((card, index) => {
    card.style.animation = `fadeInUp 0.5s ease forwards ${index * 0.1}s`;
  });
});