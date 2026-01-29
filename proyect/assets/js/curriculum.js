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
const researchPub=document.getElementById('nav_research');
const subMenuPub=document.querySelector('.sub_menu-wrap');
const subMenuListPub= document.querySelector('.sub-menu');
researchPub.addEventListener('mouseenter',()=>{
    subMenuPub.classList.add('open-menu')
    localStorage.setItem('submenuOpen', 'true');  
});      
subMenuListPub.addEventListener('mouseleave',()=>{
     subMenuPub.classList.remove('open-menu')
     localStorage.setItem('submenuOpen', 'false');
});
const srp=ScrollReveal({
     origin:'top',
     distance:'60px',
     duration:2500,
     delay:400,
     }
   )
srp.reveal('.title_container-curriculum ',{origin:'bottom'}  )
 srp.reveal('.pdf-container')