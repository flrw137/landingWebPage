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
            image.classList.remove('.home__img');
            image.classList.add('.home__light-img');
        }
        else{
            document.body.classList.remove('light-theme');
            toggleBtn.classList.add('ri-sun-line');
            toggleBtn.classList.remove('ri-moon-line');
            imageBorder.classList.add('blackhole-wrapper');
            imageBorder.classList.remove('light-wrapper');
            image.classList.add('.home__img');
            image.classList.remove('.home__light-img');
        }
    }
    toggleBtn.addEventListener('click',()=>{
        const isLight=document.body.classList.contains('light-theme');
        lightDark(isLight ? 'dark' : 'light');
    })
})
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
sr.reveal('.home__content');
sr.reveal('.blackhole-wrapper',{delay:500});        
sr.reveal('.light-wrapper',{delay:500});  
// sr.reveal('.education-container,.experience-container',{interval:100});
sr.reveal('.education-container',{origin:'left'});
sr.reveal('.experience-container',{origin:'right'});  