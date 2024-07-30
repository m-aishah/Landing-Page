document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.project-card');

  cards.forEach((card, index) => {
      card.style.animation = `fadeInUp 0.5s ease forwards ${index * 0.1}s`;

      card.addEventListener('click', () => {
          const isExpanded = card.classList.contains('expanded');
          cards.forEach(c => c.classList.remove('expanded'));
          if (!isExpanded) {
              card.classList.add('expanded');
          }
      });

      card.addEventListener('mouseenter', () => {
          if (!card.classList.contains('expanded')) {
              card.style.height = 'auto';
          }
      });

      card.addEventListener('mouseleave', () => {
          if (!card.classList.contains('expanded')) {
              card.style.height = 'auto';
          }
      });
  });

  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const pageInfo = document.querySelector('.page-info');
  const contactCard = document.querySelector('.contact-card');

  const projectsPerPage = 6;
  let currentPage = 1;

  function showPage(page) {
    let projectCount = 0;
      projectCards.forEach((card, index) => {
          card.style.display = 'none';
          if (index >= (page - 1) * projectsPerPage && index < page * projectsPerPage) {
              card.style.display = 'block';
              projectCount++;
          }
      });

      pageInfo.textContent = `Page ${page}`;
      prevBtn.disabled = page === 1;
      nextBtn.disabled = page * projectsPerPage >= projectCards.length;
  }

  prevBtn.addEventListener('click', () => {
      if (currentPage > 1) {
          currentPage--;
          showPage(currentPage);
      }
  });

  nextBtn.addEventListener('click', () => {
      if (currentPage * projectsPerPage < projectCards.length) {
          currentPage++;
          showPage(currentPage);
      }
  });

  filterButtons.forEach(button => {
      button.addEventListener('click', () => {
          const filter = button.getAttribute('data-filter');

          filterButtons.forEach(btn => btn.classList.remove('active'));
          button.classList.add('active');

          projectCards.forEach(card => {
              const categories = card.getAttribute('data-category').split(' ');

              if (filter === 'all' || categories.includes(filter)) {
                  card.style.display = 'block';
              } else {
                  card.style.display = 'none';
              }
          });

          // Reset pagination
          currentPage = 1;
          showPage(currentPage);
      });
  });

  // Initialize the first page view
  showPage(currentPage);
});
