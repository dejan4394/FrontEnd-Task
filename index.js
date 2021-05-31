const navSlide = ()=>{
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li")

  burger.addEventListener("click", ()=>{
    // ----TOGGLE NAV----
    nav.classList.toggle("nav-active");
    //  ----LINKS ANIMATION-----
    navLinks.forEach((link, index)=>{
     if(link.style.animation){
       link.style.animation = ""
     }else{
      link.style.animation = `navLinksFade 0.5s ease forwards ${index/7 + 0.5}s`
     }
    });
    // ----BURGER ANIMATION-----
    burger.classList.toggle("toggle")
  });

  
}




const close = ()=>{

const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links li")

navLinks.forEach(link=>{
  link.addEventListener("click", ()=> {
    nav.classList.toggle("nav-active");
    burger.classList.toggle("toggle");
    navLinks.forEach(link=>{
      link.style.animation = ""
    })
})
})
}

  
const app = ()=>{
  navSlide();
  close();
}



app();