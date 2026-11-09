const gradeFilters = document.querySelector('.grade-filters');
const gradeCards = [...document.querySelectorAll('.grade-card')];
const gradeCount = document.getElementById('grade-count');
gradeFilters.hidden = false;
gradeFilters.addEventListener('click', event => {
  const button = event.target.closest('button[data-filter]');
  if (!button) return;
  const category = button.dataset.filter;
  gradeFilters.querySelectorAll('button').forEach(item => {
    item.setAttribute('aria-pressed', String(item === button));
  });
  gradeCards.forEach(card => {
    card.hidden = category !== 'all' && card.dataset.category !== category;
  });
  const visible = gradeCards.filter(card => !card.hidden).length;
  gradeCount.textContent = `Showing ${visible} ${visible === 1 ? 'grade' : 'grades'}`;
});
