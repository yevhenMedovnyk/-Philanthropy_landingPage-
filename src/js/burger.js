const burgerBtn = document.querySelector('.burger');
const menuList = document.querySelector('.menu__list');
const bodyLock = document.querySelector('body');
const burgerBg = document.querySelector('.burger__bg');

//закриваємо та відкриваємо бургер по кліку миші
burgerBtn.addEventListener('click', () => {
	if (menuList.classList.contains('active')) {
		closeMenu()
	} else
		openMenu()
})

//закриваємо та відкриваємо бургер-меню за допомогою клавіатури
window.addEventListener('keyup', (e) => {
	if (e.code === 'KeyM') {
		openMenu()
	}
	if (e.code === 'Escape') {
		closeMenu()
	}
})


//ф-ція для відкривання бургера
const openMenu = () => {
	menuList.classList.add('active');
	bodyLock.classList.add('lock');
	burgerBg.classList.add('active');
}

//функція для закривання бургера
const closeMenu = () => {
	menuList.classList.remove('active');
	bodyLock.classList.remove('lock');
	burgerBg.classList.remove('active');
}