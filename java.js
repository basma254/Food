let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let header = document.querySelector("header");


//menu.onclick = () =>{

  // menu.classList.toggle('fa-times');
  // navbar.classList.toggle('active');

//}


window.onscroll = () =>{

   menu.classList.remove('fa-times');
   navbar.classList.remove('active');
   header.classList.toggle('sticky', window.scrollY>0);


}

menu.addEventListener('click', () =>{
   menu.classList.toggle('fa-times');
   navbar.classList.toggle('active');
});


   if(window.scrollY > 60){
     document.querySelector('#scroll-top').classList.add('active');
   }else{
     document.querySelector('#scroll-top').classList.remove('active');
   }

  


















