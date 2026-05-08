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
      
    })
   )

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
console.log('test')
srp.reveal('.title_container-gr',{origin:'bottom'});
// srp.reveal('.visiting',{origin:'bottom'})
srp.reveal('.students',{origin:'bottom'})
// srp.reveal('.formerStudents',{origin:'bottom'})
srp.reveal('.research_member',{origin:'bottom'});   