// $(document).ready(function() {
// 	$('.header__burger').click(function(event) {
// 		$('.header__burger,.nav').toggleClass('active');
// 		$('body').toggleClass('lock');
// 	});
// });

//<!-- Меню бургер -->

$(document).ready(function(){
	$('.header__burger, .nav__link').click(function(){
		$('.header__burger, .nav').toggleClass('active');
		$('body').toggleClass('lock');
			});
		});

	$(document).click(function(event) {
	if ($(event.target).closest('.header__burger').length) return;
	$('.nav').removeClass('active')
	$('body').removeClass('lock')
	event.stopPropagation();
	});

//<!-- Футер -->

const toggles = document.querySelectorAll('.faq-toggle');

toggles.forEach(toggle => {
	toggle.addEventListener('click', () => {
		toggle.parentNode.classList.toggle('active');
	});
});



//<!-- Скролл к якорям -->

const anchors = document.querySelectorAll('a.scroll-to')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href')
    
    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

//<!-- Popup -->

const pageBody = document.querySelector('.page');
const coverEl = document.getElementById('cover');
const formEl = document.getElementById('application__form');
const feedbackBtn = document.querySelector('.request');
const sendButton = document.getElementById('send');
const nameField = document.getElementById('name');
const emailField = document.getElementById('email');
const textField = document.getElementById('phone');

feedbackBtn.addEventListener('click', () => {
  pageBody.classList.add('no-scroll');
  coverEl.classList.remove('hidden');
  formEl.classList.remove('hidden');
});

coverEl.addEventListener('click', () => {
  pageBody.classList.remove('no-scroll');
  coverEl.classList.add('hidden');
  formEl.classList.add('hidden');
});

const validate = () => {
  if (
    nameField.validity.valid &&
    emailField.validity.valid &&
    textField.validity.valid
  ) {
    sendButton.classList.remove('invalid');
  } else {
    sendButton.classList.add('invalid');
  }
}

sendButton.addEventListener('click', () => {
  if (sendButton.classList.contains('invalid')) return;
  document.body.classList.remove('notScrollable');
  coverEl.classList.add('hidden');
  formEl.classList.add('hidden');
  alert('Спасибо, что обратились к нам');
});

nameField.addEventListener('input', () => {
  validate();
});

emailField.addEventListener('input', () => {
  validate();
});

textField.addEventListener('input', () => {
  validate();
});


//<!-- Slider -->

$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		// adaptiveHeight: true,
		// slidesToShow:1,
		autoplay:true,
		speed:800,
		autoplaySpeed:2000,
		fade: true,
				
	});
});

$(document).ready(function(){
	$('.slider__programm').slick({
	  arrows:true,
		slidesToShow:3,
		autoplay:true,
		speed:1000,
		autoplaySpeed:3000,
		responsive:[
			{
				breakpoint: 1198,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});
