document.addEventListener('DOMContentLoaded', () => {
  const tgl = document.querySelector('.button_toggle');
  if (!tgl) return;

  const buttons = tgl.querySelectorAll('.button-item');
  const group = document.querySelectorAll('.new-container');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.target;

      // quitar active a todos
      buttons.forEach(b => b.classList.remove('new-active'));

      // activar el clickeado
      btn.classList.add('new-active');

      // filtrar grupos
      group.forEach(g => {
        if (target === 'all') {
          g.classList.remove('hidden_new');
        } else {
          g.classList.toggle(
            'hidden_new',
            g.dataset.group !== target
          );
        }
      });
    });
  });
});
window.addEventListener('DOMContentLoaded',()=>{
  const toggleBtnp = document.getElementById('theme-toggle')
  const lightDarkp=(theme)=>{
        if (theme=='light'){
            document.body.classList.add('light-theme');
            toggleBtnp.classList.remove('ri-sun-line');
            toggleBtnp.classList.add('ri-moon-line');
            localStorage.setItem('theme', 'light');
        }
        else{
            document.body.classList.remove('light-theme');
            toggleBtnp.classList.add('ri-sun-line');
            toggleBtnp.classList.remove('ri-moon-line');
            localStorage.setItem('theme', 'dark');
        }
    };
   const savedTheme = localStorage.getItem('theme') || 'dark';
   lightDarkp(savedTheme);
    toggleBtnp.addEventListener('click',()=>{
        const isLight=document.body.classList.contains('light-theme');
        lightDarkp(isLight ? 'dark' : 'light');
    });
})