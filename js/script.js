'use strict'


const titleDoc = document.getElementsByTagName('h1')[0];
const handlerBtnStart = document.getElementsByClassName('handler_btn')[0];
const handlerBtnReset = document.getElementsByClassName('handler_btn')[1];
const buttonPlus = document.querySelector('.screen-btn');
const inputControls = document.querySelectorAll('.other-items.percent');
const inputControlsNumber = document.querySelectorAll('.other-items.number');
const inputRange = document.querySelector('.rollback > div > input');
const inputRangeSpan = document.querySelector('.rollback > div > span');
const totalInput1 = document.getElementsByClassName('total-input')[0];
const totalInput2 = document.getElementsByClassName('total-input')[1];
const totalInput3 = document.getElementsByClassName('total-input')[2];
const totalInput4 = document.getElementsByClassName('total-input')[3];
const totalInput5 = document.getElementsByClassName('total-input')[4];
let screenItem = document.querySelectorAll('.screen');

// const appData = {
//   title: '',
//   screens: [],
//   screenPrice: 0,
//   adaptive: true,
//   rollback: 10,
//   allServicePrices: 0,
//   fullPrice: 0,
//   servicePercentPrice: 0,
//   services: {},
  
//   asking() {
//     do {
//       appData.title = prompt('Как называется ваш проект?', 'Онлайн-магазин');
//     } while (appData.isNumber(appData.title));
     

//     for (let i = 0; i < 2; i++) {
//       let name;
//       do {
//         name = prompt('Какие типы экранов нужно разработать?', 'Простые');
//       } while (appData.isNumber(name));
//       let price;
//       do {
//         price = +prompt('Сколько будет стоить данная работа?', '12000');
//       } while (!appData.isNumber(price));
//       appData.screens.push({id: i, name: name, price: price});
//     };

//     for (let i = 0; i < 2; i++) {
//       let name;
//       do {
//         name = prompt('Какой дополнительный тип услуги нужен?', 'что-то');
//       } while (appData.isNumber(name));
//       let price;
//       do {
//         price = +prompt('Сколько это будет стоить?', '1000');
//       } while (!appData.isNumber(price));
//       appData.services[name] = +price;
//     };
    
//     appData.adaptive = confirm('Нужен ли адаптив на сайте?');
//   },

//   addPrices: function() {
//     for (let screen of appData.screens) {
//     appData.screenPrice += +screen.price;
//     };    
//     for (let key in appData.services) {
//       appData.allServicePrices += appData.services[key];
//     };
//   },

//   isNumber(num) {
//     return !isNaN(parseFloat(num)) && isFinite(num);
//   },


//   getFullPrice() {
//     appData.fullPrice = appData.screenPrice + appData.allServicePrices;
//   },


//   getServicePercentPrices() {
//     appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * appData.rollback / 100);
//   },


//   getTitle() {
//     appData.title = appData.title.trim();
//     if (appData.title.length === 0) return "";
//     appData.title = appData.title[0].toUpperCase() + appData.title.slice(1).toLowerCase();
//   },


//   getRollbackMessage() {
//     if (appData.fullPrice > 30000) {
//       return "Даем скидку в 10%";
//     } else if (appData.fullPrice >= 15000 && appData.fullPrice <= 30000) {
//       return "Даем скидку в 5%";
//     } else if (appData.fullPrice >= 0 && appData.fullPrice < 15000) {
//       return "Скидка не предусмотрена";
//     } else {
//       return "Что-то пошло не так";
//     }
//   },


//   start() {
//     appData.asking();
//     appData.addPrices();
//     appData.getFullPrice();
//     appData.getServicePercentPrices();
//     appData.getTitle();
//     appData.logger();
//   },

//   logger() {
//     console.log('Какие экраны нужны: ', appData.screens);
//     console.log('Полная стоимость: ', appData.fullPrice);
//     console.log('Стоимость с учетом вычета: ', appData.servicePercentPrice);
//   }
// };

// appData.start();


console.log('Заголовок:', titleDoc);
console.log('Кнопка рассчитать:', handlerBtnStart);
console.log('Кнопка сброс:', handlerBtnReset); 
console.log('Кнопка +:', buttonPlus);
console.log('Чекбокс:', inputControls);
console.log('Чекбокс с номером:', inputControlsNumber);
console.log('Тип:', inputRange.getAttribute('type'));
console.log('Процент:', inputRangeSpan);
console.log('Все поля справа:', totalInput1, totalInput2, totalInput3, totalInput4, totalInput5);
console.log('Типы экранов:', screenItem);




