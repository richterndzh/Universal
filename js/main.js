$(document).ready(function() {
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

});

