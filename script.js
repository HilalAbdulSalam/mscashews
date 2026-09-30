const menu = document.querySelector('.menu-toggle');
const navigation = document.getElementById('navigation');
function closeMenu() {
  menu.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('is-open');
}
menu.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(open));
  navigation.classList.toggle('is-open', open);
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menu.focus();
  }
});
document.getElementById('enquiry-form').addEventListener('submit', event => {
  event.preventDefault();
  const grade = document.getElementById('grade').value;
  const pack = document.getElementById('pack').value;
  const note = document.getElementById('message').value.trim();
  const text = `Hello Kajuva! I'd like to enquire about your cashews.\nGrade: ${grade}\nPack size: ${pack}${note ? `\n${note}` : ''}\nPlease share current pricing and availability.`;
  window.open(`https://wa.me/919656915303?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
});
document.getElementById('year').textContent = new Date().getFullYear();
