// Tiny interactivity for the demo site
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

document.querySelectorAll('button[data-plan]').forEach(btn => {
  btn.addEventListener('click', () => {
    const plan = btn.getAttribute('data-plan');
    const select = document.querySelector('select[name="plan"]');
    if (select) select.value = plan;
    document.getElementById('reserve-form')?.scrollIntoView({behavior:'smooth'});
  });
});

document.getElementById('reserve-form')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target));
  alert(`Thanks, ${data.name}! Your ${data.plan} reservation is recorded for ${data.email}.`);
  e.target.reset();
});
