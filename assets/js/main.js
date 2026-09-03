(function(){
  'use strict';
  const menu=document.querySelector('.mobile-menu');
  const mobileNav=document.querySelector('#mobile-nav');
  if(menu&&mobileNav){
    menu.addEventListener('click',()=>{
      const open=mobileNav.classList.toggle('show');
      menu.setAttribute('aria-expanded',String(open));
      mobileNav.setAttribute('aria-hidden',String(!open));
      menu.innerHTML=open?'<i class="bi bi-x"></i>':'<i class="bi bi-list"></i>';
    });
    mobileNav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
      mobileNav.classList.remove('show'); menu.setAttribute('aria-expanded','false'); mobileNav.setAttribute('aria-hidden','true'); menu.innerHTML='<i class="bi bi-list"></i>';
    }));
  }
  const top=document.querySelector('.scroll-top');
  const update=()=>top&&top.classList.toggle('show',window.scrollY>600);
  window.addEventListener('scroll',update,{passive:true}); update();
  const year=document.querySelector('#year'); if(year) year.textContent=new Date().getFullYear();
  if(window.AOS){AOS.init({duration:700,easing:'ease-out-cubic',once:true,offset:70});}
})();
