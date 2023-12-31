// for navbar
let menus = document.querySelector(".navbar");
let menus_btn = document.querySelector(".menu-btn");
let close_btn = document.querySelector(".close-btn");

menus_btn.addEventListener("click", function () {
  menus.classList.add("active2");
});

close_btn.addEventListener("click", function () {
  menus.classList.remove("active2");
});

const sr = ScrollReveal ({
  distance :'60px',
  duration:2500,
  delay:400,
  reset:true
})
sr.reveal('.text',{delay:200,origin:'top'})
sr.reveal('.form-container form',{delay:800,origin:'left'})
sr.reveal('.heading',{delay:800,origin:'top'})
sr.reveal('.ride-container .box',{delay:600,origin:'top'})
sr.reveal('.services-container .box',{delay:600,origin:'top'})
sr.reveal('.about-container .box',{delay:600,origin:'top'})
sr.reveal('.reviwes-container',{delay:600,origin:'top'})
sr.reveal('.newsletter .box',{delay:400,origin:'bottom'})