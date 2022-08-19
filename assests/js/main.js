const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');
const mobile_menu_h = document.querySelector('header');
	menu_btn.addEventListener('click', function () {
		menu_btn.classList.toggle('actived');
		mobile_menu.classList.toggle('actived');
		mobile_menu_h.classList.toggle('actived');
	});