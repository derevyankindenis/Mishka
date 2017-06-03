'use strict';

/*     Навигация     */
var menuButton = document.querySelector('.btn--main-nav');
var menu = document.querySelector('.main-navigation');

menuButton.classList.add('btn--main-nav-open');

menu.classList.add('main-navigation--close');
menu.classList.add('main-navigation--absolute');

var openMenuEvent = function() {
    if (menu.classList.contains('main-navigation--close')) {
        menu.classList.remove('main-navigation--close');
        menuButton.classList.remove('btn--main-nav-open');
        menuButton.classList.add('btn--main-nav-close');
    }
    else {
        menuButton.classList.add('btn--main-nav-open');
        menuButton.classList.remove('btn--main-nav-close');
        menu.classList.add('main-navigation--close');
    }
}

menuButton.addEventListener('click', openMenuEvent);


/*     Попап заказа     */

var productOfWeekButton = document.querySelector('.btn--product-of-week');
var modalOrder = document.querySelector('.modal-order');
var itemButtons = document.querySelectorAll('.catalog-item__btn')

if (productOfWeekButton)  productOfWeekButton.removeAttribute('href');

var openModalOrderWindow = function(ev) {
  if (modalOrder.classList.contains('modal-order--hide')) {
    modalOrder.classList.remove('modal-order--hide');
    ev.stopPropagation();
  }
}

if (productOfWeekButton){
  productOfWeekButton.addEventListener('click', openModalOrderWindow, true);
}

Array.prototype.forEach.call(itemButtons, function(item) {
  item.addEventListener('click', openModalOrderWindow, true);
});

window.addEventListener('keydown', function (event) {
  if (event.keyCode === 27) {
    if (!modalOrder.classList.contains('modal-order--hide')) {
      modalOrder.classList.add('modal-order--hide');
    }
  }
});


/*     Яндекс карта     */

function initMap() {
  
  var Ymap = new ymaps.Map('map', {
    center: [59.936750, 30.321681], // Санкт-Петербург
    zoom: 16
  }, { maxZoom: 18, minZoom: 11 });
  

  var myPlacemark = new ymaps.Placemark(
    [59.936339, 30.321681], {
      hintContent: 'ул. Большая Конюшенная 19/8, Санкт-Петербург'
    }, {
      iconImageHref: 'img/icon/icon-map-pin.svg', 
      iconImageSize: [70, 100], 
      iconImageOffset: [-35, -100] 
    });

  Ymap.geoObjects.add(myPlacemark);
  
  var mapHtmlPin = document.querySelector('.contacts__map-placemark');
  mapHtmlPin.style.display = 'none';
};

function initPage() {
  try {
    ymaps.ready(initMap);
  }
  catch (e) {
    
  }
}

document.addEventListener('DOMContentLoaded', initPage);