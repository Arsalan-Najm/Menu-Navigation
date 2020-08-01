const showNav = document.querySelector('.nav');
const hideNav = document.querySelector('.hide-nav');
const menu = document.querySelector('.menu');

showNav.addEventListener("click",function(){
	menu.style.right = "0";
});
hideNav.addEventListener("click",function(){
	menu.style.right = "-100%";
})