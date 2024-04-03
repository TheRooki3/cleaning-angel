const hamMenu = document.getElementById("ham-menu");
const menuModal = document.getElementById("menu");
const closeMenu = document.getElementById("close-menu");
const menuBackground = document.getElementById("menu-background");
const serviceIcons = document.querySelectorAll(".service-icon");
const windowSize = window.innerWidth;

if(windowSize >= 900){
	serviceIcons.forEach((icon) =>{
		icon.classList.remove("fa-4x");
		icon.classList.add("fa-6x");
	});
}

hamMenu.addEventListener('click',()=>{
	if(menuModal.style.display === "none"){
		menuModal.style.display = "block";
		menuBackground.style.display = "block";
		
	}else{
		menuModal.style.display = "none";
		menuBackground.style.display = "none";
	}
	
});

const windowCheck = () => {
	if (window.innerWidth >= 900){
		menuModal.style.display = "none";
		menuBackground.style.display = "none";
	}else{
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
	if (window.innerWidth < 900){
		hamMenu.style.display = "block";
		serviceIcons.forEach((icon) =>{
			icon.classList.remove("fa-6x");
			icon.classList.add("fa-4x");
		});
	}else if(window.innerWidth >= 900){
		menuModal.style.display = "none";
		hamMenu.style.display = "none";
		menuBackground.style.display = "none";
		serviceIcons.forEach((icon) =>{
			icon.classList.remove("fa-4x");
			icon.classList.add("fa-6x");
		});
	}

});