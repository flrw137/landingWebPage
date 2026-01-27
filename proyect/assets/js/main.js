const scrollMotion=()=>{
     const header= document.getElementById('header')
     this.scrollY >=20 
     ? header.classList.add('scrolled-header')
     :header.classList.remove('scrolled-header')
}
window.addEventListener('scroll',scrollMotion)

window.addEventListener('DOMContentLoaded',()=>{
    const toggleBtn = document.getElementById('theme-toggle');
    const imageBorder=document.querySelector('.blackhole-wrapper');
    const image=document.querySelector('.home__img');
    const lightDark=(theme)=>{
        if (theme=='light'){
            document.body.classList.add('light-theme');
            toggleBtn.classList.remove('ri-sun-line');
            toggleBtn.classList.add('ri-moon-line');
            imageBorder.classList.remove('blackhole-wrapper');
            imageBorder.classList.add('light-wrapper');
            localStorage.setItem('theme', 'light');
        }
        else{
            document.body.classList.remove('light-theme');
            toggleBtn.classList.add('ri-sun-line');
            toggleBtn.classList.remove('ri-moon-line');
            imageBorder.classList.add('blackhole-wrapper');
            imageBorder.classList.remove('light-wrapper');
            image.classList.add('.home__img');
            image.classList.remove('.home__light-img');
            localStorage.setItem('theme', 'dark');
        }
    };
   const savedTheme = localStorage.getItem('theme') || 'dark';
   lightDark(savedTheme);
    toggleBtn.addEventListener('click',()=>{
        const isLight=document.body.classList.contains('light-theme');
        lightDark(isLight ? 'dark' : 'light');
    });
});
const downloadButton=document.getElementById("download");
 downloadButton.addEventListener("click", ()=>{
    const link = document.createElement("a");
    window.open( "https://itp.uni-frankfurt.de/~osorio/pdf/CVshort_AlejandroC0.pdf", "_blank");      
    link.click();
});
const sr=ScrollReveal({
     origin:'top',
     distance:'60px',
     duration:2500,
     delay:400,
})
const research=document.getElementById('nav_research');
const subMenu=document.querySelector('.sub_menu-wrap');
const subMenuList= document.querySelector('.sub-menu');
// const showMenu=()=>{
//     subMenu.classList.add('open-menu')
//     localStorage.setItem('submenuOpen', 'true');
   
// } 
// const hideMenu=()=>{
//      subMenu.classList.remove('open-menu')
//      localStorage.setItem('submenuOpen', 'false');
// }
research.addEventListener('mouseenter',()=>{
    subMenu.classList.add('open-menu')
    localStorage.setItem('submenuOpen', 'true');  
});      
subMenuList.addEventListener('mouseleave',()=>{
     subMenu.classList.remove('open-menu')
     localStorage.setItem('submenuOpen', 'false');
});

window.addEventListener('DOMContentLoaded', () => {
  const subMenu = document.querySelector('.sub_menu-wrap');
  if (localStorage.getItem('submenuOpen') === 'true') {
    subMenu.classList.add('open-menu');
  }

});
// window.addEventListener('DOMContentLoaded', () => {
//   const path = window.location.pathname;

//   document.querySelectorAll('.has-submenu').forEach(item => {
//     const section = item.dataset.section;
//     const subMenu = item.querySelector('.sub_menu-wrap');

   
//     if (path.includes(section)) {
//       item.classList.add('active');
//       subMenu.classList.add('open-menu');
//     }

//     item.addEventListener('mouseenter', () => {
//       subMenu.classList.add('open-menu');
//     });

//     item.addEventListener('mouseleave', () => {
//       if (!item.classList.contains('active')) {
//         subMenu.classList.remove('open-menu');
//       }
//     });
//   });
// });

sr.reveal('.home__content');
sr.reveal('.blackhole-wrapper',{delay:500});        
sr.reveal('.light-wrapper',{delay:500});  
sr.reveal('.education-container',{origin:'left'});
sr.reveal('.experience-container',{origin:'right'});  
