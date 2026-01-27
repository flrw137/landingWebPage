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
window.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname;

  document.querySelectorAll('.has-submenu').forEach(item => {
    const section = item.dataset.section;
    const subMenu = item.querySelector('.sub_menu-wrap');

   
    if (path.includes(section)) {
      item.classList.add('active');
      subMenu.classList.add('open-menu');
    }

    item.addEventListener('mouseenter', () => {
      subMenu.classList.add('open-menu');
    });

    item.addEventListener('mouseleave', () => {
      if (!item.classList.contains('active')) {
        subMenu.classList.remove('open-menu');
      }
    });
  });
});

window.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname;

  document.querySelectorAll('.has-submenu-2').forEach(item => {
    const section = item.dataset.section;
    const subMenu = item.querySelector('.sub_menu-wrap-2');
    if (path.includes(section)) {
      item.classList.add('active');
      subMenu.classList.add('open-menu');
    }

    item.addEventListener('mouseenter', () => {
      subMenu.classList.add('open-menu');
    });

    item.addEventListener('mouseleave', () => {
      if (!item.classList.contains('active')) {
        subMenu.classList.remove('open-menu');
      }
    });
  });
}); 

const srp=ScrollReveal({
     origin:'top',
     distance:'60px',
     duration:2500,
     delay:400,
     }
   )
document.addEventListener('DOMContentLoaded',()=>{
   const cont=document.querySelector('.button_members');
   const buttons=cont.querySelectorAll('.button_member')
   const group=document.querySelectorAll('.member_group')
   
   if(!buttons) return;
   buttons.forEach(btn=>
    btn.addEventListener('click',()=>{
      const target = btn.dataset.target;
      buttons.forEach(b=>b.classList.remove('Active')) 
      btn.classList.add('Active')
      group.forEach(g=>g.classList.toggle('hidden_members',
          g.dataset.group !== target)) 
      // group.forEach(g=>console.log(g.dataset.group))
    })
   )

})


srp.reveal('.title_container-gr',{origin:'bottom'});
srp.reveal('.visiting',{origin:'bottom'})
srp.reveal('.students',{origin:'bottom'})
// srp.reveal('.formerStudents',{origin:'bottom'})
srp.reveal('.research_member',{origin:'bottom'});   