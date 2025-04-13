console.log("JavaScript is linked! ✅");
document.getElementById('searchInput').addEventListener('keyup', function () {
    const filter = this.value.toLowerCase();
    const cards = document.querySelectorAll('.recipe-card');
  
    cards.forEach(card => {
      const title = card.querySelector('.card-title').textContent.toLowerCase();
      const text = card.querySelector('.card-text').textContent.toLowerCase();
      const match = title.includes(filter) || text.includes(filter);
      card.style.display = match ? '' : 'none';
    });
  });
  