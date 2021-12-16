$(document).ready(function() {
  
var modalButton = $("[data-toggle=modal]");
  var closemodalButton = $(".modal__close");
  modalButton.on("click", openModal); 
  closemodalButton.on("click", closeModal);

  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass("modal__overlay--visible"); 
    modalDialog.addClass("modal__dialog--visible");
  }

  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible"); 
    modalDialog.removeClass("modal__dialog--visible");
  }

   $(document).keydown(function (e) {
    // ESCAPE key pressed
    if (e.keyCode == 27) {
      var modalOverlay = $(".modal__overlay");
      var modalDialog = $(".modal__dialog");
      modalOverlay.removeClass("modal__overlay--visible");
      modalDialog.removeClass("modal__dialog--visible");
    }
  });
  
  // Подключение мобильного меню
  var menuButton = document.querySelector(".navbar-button")
  menuButton.addEventListener('click', function () {
    document
    .querySelector(".navbar-menu")
    .classList.toggle('navbar-menu--visible');
  });

  // Подключение закладок
  var bookmark2 = document.querySelector(".announce-wrapper__bookmark")
    bookmark2.addEventListener('click', function () {
    document
    .querySelector(".announce-wrapper__bookmark")
    .classList.toggle('announce-wrapper__bookmark--red');
  });

  
   //Обработка форм 
      $('.claim').each(function () {
        $(this).validate({
        errorClass: "invalid",
        rules: {
        email: {
          required: true,
          email: true,
        },
      },
      
        messages: {
        email: {
          required: "Введите адрес электронной почты",
          email: "Ваш адрес электронной почты должен быть в формате name@domain.com.",
        },
      },
    });
  });
  $('.form').each(function () {
        $(this).validate({
        errorClass: "validation",
        rules: {
          name: {
            required: true,
            minlength: 2,
          },
          phone: {
            minlength: 16,
          },
      },
      
        messages: {
          name: {
              required: "Введите ваше имя",
              minlength: "Имя должно состоять минимум из двух букв.",
            },
          phone: {
            required: "Введите ваш номер телефона",
          },
      },
    });
  });
  $(document).ready(function(){
    $("#phone").mask("+7(000)000-00-00");
    $("#phone1").mask("+7(000)000-00-00");
  });

});

