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

const srp=ScrollReveal({
     origin:'top',
     distance:'60px',
     duration:2500,
     delay:400,
     }
   )

srp.reveal('.pub_title-container',{origin:'bottom'});
srp.reveal('.article-item',{delay:500});         
document.addEventListener('click', (e) => {

  const btn = e.target.closest('.show_all');
  if (!btn) return;

  const group = btn.closest('.pub_info-container');
  const allAuthors = group.querySelector('.all_authors1');
  const dIcon=btn.querySelector('.icon')
  const btnText = btn.querySelector('.button_show')
  const mAuthors = group.querySelector('.more_authors')
  const aHidden=allAuthors.classList.contains('hidden')
  if (aHidden){
    allAuthors.classList.remove('hidden')
    dIcon.classList.remove('ri-arrow-down-s-line')
    dIcon.classList.add('ri-arrow-up-s-line')
    mAuthors.classList.add('hidden')
    btnText.innerHTML='Show less'
   }
   else{
    allAuthors.classList.add('hidden')
    dIcon.classList.remove('ri-arrow-up-s-line')
    dIcon.classList.add('ri-arrow-down-s-line')
     mAuthors.classList.remove('hidden')
    btnText.innerHTML='Show all authors'
   }
});

document.addEventListener('click',(e)=>{
   const btn2=e.target.closest('.show_abstract')
   if(!btn2) return;
   const Group=btn2.closest('.abstract_container')
   const paperAbstract= Group.querySelector('.abstract')
   const btn2Icon=btn2.querySelector('.icon_2')
   const buttonText= btn2.querySelector('.button_abstract')
   const abstractHidden=paperAbstract.classList.contains('Hidden')
   if (abstractHidden){
      paperAbstract.classList.remove('Hidden')
      btn2Icon.classList.remove('ri-arrow-down-s-line')
      btn2Icon.classList.add('ri-arrow-up-s-line')
      buttonText.innerHTML='Show less'
   }
   else{
   paperAbstract.classList.add('Hidden')
   btn2Icon.classList.remove('ri-arrow-up-s-line') 
   btn2Icon.classList.add('ri-arrow-down-s-line')
   buttonText.innerHTML='Show abstract'
   }  
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