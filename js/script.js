'use strict'

const appData = {
  title: '',
  screens: [],
  screenPrice: 0,
  adaptive: true,
  rollback: 10,
  allServicePrices: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  services: {},
  
  asking() {
    do {
      appData.title = prompt('Как называется ваш проект?', 'Онлайн-магазин');
    } while (appData.isNumber(appData.title));
     

    for (let i = 0; i < 2; i++) {
      let name;
      do {
        name = prompt('Какие типы экранов нужно разработать?', 'Простые');
      } while (appData.isNumber(name));
      let price;
      do {
        price = +prompt('Сколько будет стоить данная работа?', '12000');
      } while (!appData.isNumber(price));
      appData.screens.push({id: i, name: name, price: price});
    };

    for (let i = 0; i < 2; i++) {
      let name;
      do {
        name = prompt('Какой дополнительный тип услуги нужен?', 'что-то');
      } while (appData.isNumber(name));
      let price;
      do {
        price = +prompt('Сколько это будет стоить?', '1000');
      } while (!appData.isNumber(price));
      appData.services[name] = +price;
    };
    
    appData.adaptive = confirm('Нужен ли адаптив на сайте?');
  },

  addPrices: function() {
    for (let screen of appData.screens) {
    appData.screenPrice += +screen.price;
    };    
    for (let key in appData.services) {
      appData.allServicePrices += appData.services[key];
    };
  },

  isNumber(num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
  },


  getFullPrice() {
    appData.fullPrice = appData.screenPrice + appData.allServicePrices;
  },


  getServicePercentPrices() {
    appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * appData.rollback / 100);
  },


  getTitle() {
    appData.title = appData.title.trim();
    if (appData.title.length === 0) return "";
    appData.title = appData.title[0].toUpperCase() + appData.title.slice(1).toLowerCase();
  },


  getRollbackMessage() {
    if (appData.fullPrice > 30000) {
      return "Даем скидку в 10%";
    } else if (appData.fullPrice >= 15000 && appData.fullPrice <= 30000) {
      return "Даем скидку в 5%";
    } else if (appData.fullPrice >= 0 && appData.fullPrice < 15000) {
      return "Скидка не предусмотрена";
    } else {
      return "Что-то пошло не так";
    }
  },


  start() {
    appData.asking();
    appData.addPrices();
    appData.getFullPrice();
    appData.getServicePercentPrices();
    appData.getTitle();
    appData.logger();
  },

  logger() {
    console.log('Какие экраны нужны: ', appData.screens);
    console.log('Полная стоимость: ', appData.fullPrice);
    console.log('Стоимость с учетом вычета: ', appData.servicePercentPrice);
  }
};

appData.start();


// logger() {
//   for (let key in appData) {
//     console.log(key + ':', appData[key]);
//   }
// }