// Vars
const header_h2 = document.querySelector('.white')
const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');
const mobile_menu_h = document.querySelector('header');
menu_btn.addEventListener('click', function () {
	menu_btn.classList.toggle('actived');
	mobile_menu.classList.toggle('actived');
	mobile_menu_h.classList.toggle('actived');
});

// sleep function
function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

// auto hover on scroll
function figur_activition (x) {
	if (x.matches) {
		window.onscroll = function() {figur_active_mobile()};
		function figur_active_mobile() {
		if (document.documentElement.scrollTop < 600) {
			document.getElementById('figur1').className = 'figur';
		} else {
			document.getElementById('figur1').className = 'figur hover';
		}
		if (document.documentElement.scrollTop < 1100) {
			document.getElementById('figur2').className = 'figur';
		} else {
			document.getElementById('figur2').className = 'figur hover';
		}
		if (document.documentElement.scrollTop < 1600) {
			document.getElementById('figur3').className = 'figur';
		} else {
			document.getElementById('figur3').className = 'figur hover';
		}
		}
	} else {
		window.onscroll = function() {figur_active()};
		function figur_active() {
		if (document.documentElement.scrollTop < 500) {
			sleep(0).then(() => document.getElementById("figur1").className = "figur");
			sleep(750).then(() => document.getElementById("figur2").className = "figur");
			sleep(1500).then(() => document.getElementById("figur3").className = "figur");
		} else {
			sleep(0).then(() => document.getElementById("figur1").className = "figur hover");
			sleep(750).then(() => document.getElementById("figur2").className = "figur hover");
			sleep(1500).then(() => document.getElementById("figur3").className = "figur hover");
		}
		}
	}
}

var x = window.matchMedia("(max-width: 768px)")
figur_activition(x)
x.addListener(figur_activition)