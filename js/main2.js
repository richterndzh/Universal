$(document).ready(function() {
var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: 'true',
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 3000,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  effect: "fade",
})

var menuButton = $('.menu-button')
  menuButton.on('click', function () {
    $('.navbar-menu').toggleClass('navbar-menu--visible')
  })
  var menuButtonLight = $('.menu-buttons--light')
  menuButtonLight.on('click', function () {
    $('.navbar-menu--light').toggleClass('navbar-menu--visible--light')
  })

  var modalButton = $('[data-toggle=modal]')
  var closeModalButton = $('.modal__close')
  modalButton.on('click', openModal)
  closeModalButton.on('click', closeModal)

  function openModal() {
    var modalOverlay = $('.modal__overlay')
    var modalDialog = $('.modal__dialog')
    modalOverlay.addClass('modal__overlay--visible')
    modalDialog.addClass('modal__dialog--visible')
  }
  function closeModal(event) {
    event.preventDefault()
    var modalOverlay = $('.modal__overlay')
    var modalDialog = $('.modal__dialog')
    modalOverlay.removeClass('modal__overlay--visible')
    modalDialog.removeClass('modal__dialog--visible')
  }

  $(document).keydown(function (event) {
    if (event.keyCode === 27) {
      $('.modal__overlay').removeClass('modal__overlay--visible')
      $('.modal__dialog').removeClass('modal__dialog--visible')
    }
  })

  $(document).click(function (e) {
    if ($(e.target).is('.modal__overlay')) {
      $('.modal__overlay').removeClass('modal__overlay--visible')
      $('.modal__dialog').removeClass('modal__dialog--visible')
    }
  })
  // Валидация форм
  $('.form').each(function () {
    $(this).validate({
      errorClass: 'invalid',
      messages: {
        name: {
          required: 'Пожалуйста, укажите Ваше имя',
          minlength: 'Введите как минимум 2 буквы',
        },
        phone: {
          required: 'Пожалуйста, введите Ваш номер телефона',
          minlength: 'Введите как минимум 10 цифр',
        },
        email: {
          required: 'Пожалуйста, введите адрес Вашей эл. почты',
          email: 'Адрес эл. почты должен быть в формате name@domain.com',
        },
        checkbox: {
          required: 'Это обязательное поле!',
        },
        comment: {
          required: 'Пожалуйста, напишите Ваш комментарий',
          minlength: 'Сообщение должно содержать минимум 100 символов',
        },
      },
    })
  })
  var commentsButton = $('.comments-button')
    commentsButton.on('click', function () {
      $('.comments-card--hidden')
        .toggle('slow')
        .toggleClass('comments-card--hidden--visible')
  })
  var closeButton = $('.comments-button')
    closeButton.on('click', function () {
      $('.comments-button')
        .toggle('slow')
        .toggleClass('comments-button--none')
    })

  $('.hero-bookmark').on('click', function () {
    if ($('.hero-bookmark').css('fill') == 'rgb(188, 191, 194)') {
      $('.hero-bookmark').css({ fill: 'rgb(255, 79, 82)' })
    } else {
      $('.hero-bookmark').css({ fill: 'rgb(188, 191, 194)' })
    }
  })

  var menuButtonLight = document.querySelector(".navbar-buttons--light")
  menuButtonLight.addEventListener('click', function () {
    document
    .querySelector(".navbar-menu")
    .classList.toggle('navbar-menu--visible');
  });

});

