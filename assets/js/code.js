window.addEventListener('DOMContentLoaded',()=>{
  const toggleBtnp = document.getElementById('theme-toggle');
const logo= document.querySelector('.nav-icon');
  const lightDarkp=(theme)=>{
        if (theme=='light'){
            document.body.classList.add('light-theme');
            toggleBtnp.classList.remove('ri-sun-line');
            toggleBtnp.classList.add('ri-moon-line');
            localStorage.setItem('theme', 'light');
            logo.src='../assets/img/logo.png'
        }
        else{
            document.body.classList.remove('light-theme');
            toggleBtnp.classList.add('ri-sun-line');
            toggleBtnp.classList.remove('ri-moon-line');
            localStorage.setItem('theme', 'dark');
              logo.src='../assets/img/logo2.png'
        }
    };
   const savedTheme = localStorage.getItem('theme') || 'dark';
   lightDarkp(savedTheme);
    toggleBtnp.addEventListener('click',()=>{
        const isLight=document.body.classList.contains('light-theme');
        lightDarkp(isLight ? 'dark' : 'light');
    });
})
const navMenu=document.getElementById('nav-menu'),
 navToggle=document.getElementById('nav-toggle'),
 navClose=document.getElementById('nav-close');
 if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu');
        
    })
 }
    if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu');  

    })
 }