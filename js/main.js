$(document).ready(function() {
  var tabsItem = $(".tabs-item__block")
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

  var menuButton = document.querySelector(".navbar-button")
  menuButton.addEventListener('click', function () {
    document
    .querySelector(".navbar-menu")
    .classList.toggle('navbar-menu--visible');
  });
});