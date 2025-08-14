
document.addEventListener('DOMContentLoaded', function(){
  const toggle = document.getElementById('menuToggle');
  const menu = document.getElementById('mobileMenu');
  if(toggle){
    toggle.addEventListener('click', ()=>{
      menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
    });
    document.addEventListener('click', (e)=>{
      if(!menu.contains(e.target) && e.target !== toggle){ menu.style.display='none'; }
    });
  }
});
