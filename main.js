const navbar = document.querySelector('#navbar');
const navBtn = document.querySelector('#nav-btn');
const navBtnImg = document.querySelector('#nav-btn-img');
const navBtnImgClouse = document.querySelector('#nav-btn-img-clouse');

navBtn.onclick = () => {
	if (navbar.classList.toggle('open')) {
		navBtnImg.src = "./images/Rectangle 1326.svg"
	} else {
		navBtnImgClouse.src = "./images/Group 313.svg"
	}
}

document.addEventListener('DOMContentLoaded', function() {
	// Находим кнопку отправки формы
	var formButton = document.querySelector('.form__btn');

	// Добавляем обработчик события клика на кнопку
	formButton.addEventListener('click', function(event) {
		event.preventDefault(); // Отменяем стандартное поведение формы

		// Ваш код здесь для обработки отправки формы
		// Можете добавить AJAX-запрос для отправки данных на сервер

		// После успешной отправки выводим сообщение
		alert('Сіздің өтінішіңіз сәтті қабылданды!');

		// Опционально: сбросить значения полей формы
		// document.querySelector('form').reset();
	});
});