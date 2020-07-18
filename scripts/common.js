$(document).ready(function(){
	'use strict';
	
	// Настроки слайдера + отключение слайдера на моб-версиях
	function slider() {
		$('.slider-infoblock').slick({
			arrows: false,
			dots: false,
			slidesToShow: 3,
			slidesToScroll: 1,
			centerMode: true,
			focusOnSelect:true,
			vertical: true,
			verticalScrolling: true,
			speed: 300,
		});
		$('.info-block__text').slick({
			autoplay: true,
			arrows: false,
			dots: false,
			slidesToShow: 3,
			slidesToScroll: 1,
			centerMode: true,
			focusOnSelect:true,
			infinite: true,
			vertical: true,
			initialSlide: 3,
			verticalScrolling: true,
			speed: 200,
			autoplaySpeed: 1000,
			// useTransform: true,
			// cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
			// adaptiveHeight: true,
		});
	}
	slider();
	$(window).resize(function() {
		if ($(window).width() < 980) {
			$('.slider-infoblock').slick('unslick');
			$('.info-block__text').slick('unslick');
		} else {
			slider();
		}
	});
	
	// Плавное перемещение к нужному блоку
	$("a").click(function () {
		var elementClick = $(this).attr("href");
		var destination = $(elementClick).offset().top;
		$("body,html").animate({scrollTop: destination }, 800);
	});

	// Реализация мобильного меню
	$('.burger').click(function() {
		if($('.burger').hasClass('close')) {
			$('.burger').removeClass('close');
			$('.menu__nav').fadeOut('');
		} else {
			$('.burger').addClass('close');
			$('.menu__nav').fadeIn('');
		}
	});
	$('.menu__item').click(function() {
			$('.burger').removeClass('close');
			$('.menu_nav').fadeOut('');
	});

	// Реализация Всплывающего окна
	$('.popup__close').click(function(){
		$('#form__offer').show();
		$('.popup').removeClass('js-active');
		$('.popup__body').removeClass('js-active');
		$('.js-overflow').removeClass('js-scrollHidden');
	});
	$(document).mouseup(function (e){ 
		var div = $(".popup__body"); 
		if (!div.is(e.target) && div.has(e.target).length === 0) { 
			$('.popup').removeClass('js-active');
			$('.popup__body').removeClass('js-active');
			$('#form__offer').show();
			$('.js-overflow').removeClass('js-scrollHidden');
		}
	});
	$('.btn__offer').click(function(){
		$('.popup').addClass('js-active');
		$('.popup__body').removeClass('js-active');
		$('#popup__offer').addClass('js-active');
		$('.js-overflow').addClass('js-scrollHidden');
	});
});

// Ajax запрос для формы отправки
function send(event, php){
	document.getElementById("form__message").textContent = "Отправка запроса...";
	event.preventDefault ? event.preventDefault() : event.returnValue = false;
	var req = new XMLHttpRequest();
	req.open('POST', php, true);
	req.onload = function() {
		if (req.status >= 200 && req.status < 400) {
			jsondate = JSON.parse(this.response);
			// console.log(jsondate);

			// ЗДЕСЬ УКАЗЫВАЕМ ДЕЙСТВИЯ В СЛУЧАЕ УСПЕХА ИЛИ НЕУДАЧИ
			if (jsondate.result == "success") {
				// Если сообщение отправлено
				document.getElementById("form__message").textContent = "Сообщение отправлено!";
				document.formfile.reset();
			} else {
				// Если произошла ошибка
				document.getElementById("form__message").textContent = "Ошибка. Сообщение не отправлено";
				document.formfile.reset();
			}
		// Если не удалось связаться с php файлом
		} else {alert("Ошибка сервера. Номер: "+req.status);}}; 
	
	// Если не удалось отправить запрос. Стоит блок на хостинге
	req.onerror = function() {alert("Ошибка отправки запроса");};
	req.send(new FormData(event.target));
}

// Ajax запрос для формы отправки
function sendWindow(event, php){
	document.getElementById("popup__message").textContent = "Отправка запроса...";
	event.preventDefault ? event.preventDefault() : event.returnValue = false;
	var req = new XMLHttpRequest();
	req.open('POST', php, true);
	req.onload = function() {
		if (req.status >= 200 && req.status < 400) {
			jsondate = JSON.parse(this.response);
			// console.log(jsondate);

			// ЗДЕСЬ УКАЗЫВАЕМ ДЕЙСТВИЯ В СЛУЧАЕ УСПЕХА ИЛИ НЕУДАЧИ
			if (jsondate.result == "success") {
				// Если сообщение отправлено
				document.getElementById("popup__message").textContent = "Сообщение отправлено!";
				document.form.reset();
			} else {
				// Если произошла ошибка
				document.getElementById("popup__message").textContent = "Ошибка. Сообщение не отправлено";
				document.form.reset();
			}
		// Если не удалось связаться с php файлом
		} else {alert("Ошибка сервера. Номер: "+req.status);}}; 
	
	// Если не удалось отправить запрос. Стоит блок на хостинге
	req.onerror = function() {alert("Ошибка отправки запроса");};
	req.send(new FormData(event.target));
}
