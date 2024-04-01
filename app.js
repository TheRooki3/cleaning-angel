const hamMenu = document.getElementById("ham-menu");
const menuModal = document.getElementById("menu");
const closeMenu = document.getElementById("close-menu");
const menuBackground = document.getElementById("menu-background");

hamMenu.addEventListener('click',()=>{
	hamMenu.style.display = "none";
	menuModal.style.display = "grid";
	menuBackground.style.display = "block";
});

const windowCheck = () => {
	if (window.innerWidth >= 900){
		hamMenu.style.display = "none"
		menuModal.style.display = "none";
		menuBackground.style.display = "none";
	}else{
		hamMenu.style.display = "block";
		menuModal.style.display = "none";
		menuBackground.style.display = "none";
	}
};

closeMenu.addEventListener('click', ()=>{
	windowCheck();
});

menuBackground.addEventListener('click', ()=>{
	windowCheck();
});

window.addEventListener("resize", ()=>{
	if(window.innerWidth < 900){
		hamMenu.style.display = "block";
	}
	if(window.innerWidth >= 900){
		hamMenu.style.display = "none";
	}
});