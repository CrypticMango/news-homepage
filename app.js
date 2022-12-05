const menu = document.getElementById("navigation-menu");
const closeButton = document.getElementById("close-b");
const burger = document.getElementById("burger-b");
const menuItem = document.getElementsByTagName("li");

burger.addEventListener("click", openMenu);
closeButton.addEventListener("click", closeMenu);
menuItem[0].addEventListener("click", closeMenu);
menuItem[1].addEventListener("click", closeMenu);
menuItem[2].addEventListener("click", closeMenu);
menuItem[3].addEventListener("click", closeMenu);
menuItem[4].addEventListener("click", closeMenu);

function openMenu() {
	menu.style.display = "block";
}

function closeMenu() {
	menu.style.display = "none";
}
