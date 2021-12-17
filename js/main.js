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
  
  var tabsItem = $(".tabs-item__block") // Подключение табов
  var contentItem = $(".tabs-content__block")

  tabsItem.on("click", function(event){
    var activeContent = $(this).attr("data-target");
    tabsItem.removeClass('tabs-item__block--active')
    contentItem.removeClass('tabs-content__block--active')
    $(activeContent).addClass('tabs-content__block--active');
    $(this).addClass('tabs-item__block--active');

  });

  var tabsMobileItem = $(".tabs-mobileItem__block")
  var contentItemMobile = $(".tabs-mobileContent__block")

  tabsMobileItem.on("click", function(event){
    var activeContent = $(this).attr("data-target");
    tabsMobileItem.removeClass('tabs-mobileItem__block--active')
    contentItemMobile.removeClass('tabs-mobileContent__block--active')
    $(activeContent).addClass('tabs-mobileContent__block--active');
    $(this).addClass('tabs-mobileItem__block--active');
  });
  // Подключение мобильного меню
  var menuButton = document.querySelector(".navbar-button")
  menuButton.addEventListener('click', function () {
    document
    .querySelector(".navbar-menu")
    .classList.toggle('navbar-menu--visible');
  });
  // Подключение закладок

  var bookmarkButton = document.querySelector(".bottomPages-articles__block-data__bookmark")
    bookmarkButton.addEventListener('click', function () {
    document
    .querySelector(".bottomPages-articles__block-data__bookmark")
    .classList.toggle('bottomPages-articles__block-data__bookmark--red');
  });

  var bookmarkButton2 = document.querySelector(".bottomPages-articles__block-data__bookmark2")
    bookmarkButton2.addEventListener('click', function () {
    document
    .querySelector(".bottomPages-articles__block-data__bookmark2")
    .classList.toggle('bottomPages-articles__block-data__bookmark2--red');
  });

  var bookmarkButton3 = document.querySelector(".bottomPages-articles__block-data__bookmark3")
    bookmarkButton3.addEventListener('click', function () {
    document
    .querySelector(".bottomPages-articles__block-data__bookmark3")
    .classList.toggle('bottomPages-articles__block-data__bookmark3--red');
  });

  var bookmarkButton4 = document.querySelector(".bottomPages-articles__block-data__bookmark4")
    bookmarkButton4.addEventListener('click', function () {
    document
    .querySelector(".bottomPages-articles__block-data__bookmark4")
    .classList.toggle('bottomPages-articles__block-data__bookmark4--red');
  });

  var bookmarkButton5 = document.querySelector(".bottomPages-articles__block-data__bookmark5")
    bookmarkButton5.addEventListener('click', function () {
    document
    .querySelector(".bottomPages-articles__block-data__bookmark5")
    .classList.toggle('bottomPages-articles__block-data__bookmark5--red');
  });

  var bookmarkButton5 = document.querySelector(".bottomPages-articles__block-data__bookmark6")
    bookmarkButton5.addEventListener('click', function () {
    document
    .querySelector(".bottomPages-articles__block-data__bookmark6")
    .classList.toggle('bottomPages-articles__block-data__bookmark6--red');
  });


   //Обработка форм 
      $('.claim').each(function () {
        $(this).validate({
        errorClass: "invalid",
        rules: {
        name: {
          required: true,
          name: true,
        },
      },
      
        messages: {
        name: {
          required: "Введите адрес электронной почты",
          name: "Ваш адрес электронной почты должен быть в формате name@domain.com.",
        },
      },
    });
  });

  
});

