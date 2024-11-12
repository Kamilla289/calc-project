"use strict";

const title = document.getElementsByTagName('h1')[0];
const buttonPlus = document.querySelector('.screen-btn');
const otherItemsPercent = document.querySelectorAll('.other-items.percent');
const otherItemsNumber = document.querySelectorAll('.other-items.number');
const rollbackInput = document.querySelector('.rollback input');
const rollbackSpan = document.querySelector('.rollback span');
const startBtn = document.getElementsByClassName('handler_btn')[0];
const resetBtn = document.getElementsByClassName('handler_btn')[1];
const total = document.getElementsByClassName('total-input')[0];
const totalCount = document.getElementsByClassName('total-input')[1];
const totalCountOther = document.getElementsByClassName('total-input')[2];
const fullTotalCount = document.getElementsByClassName('total-input')[3];
const totalCountRollback = document.getElementsByClassName('total-input')[4];
let screens = document.querySelectorAll('.screen');
const checkbox = document.querySelectorAll('input[type="checkbox"]');
const range = document.querySelector('input[type="range"]');
const otherItems = document.querySelectorAll('.other-items > input[type="text"]');
const totalItemsInput = document.querySelectorAll('.main-total__item > input[type="text"]');


const appData = {
  title: "",
  screens: [],
  screenPrice: 0,
  adaptive: true,
  rollback: 0,
  servicesPercent: {},
  servicesNumber: {},
  servicePercentPrice: 0,
  servicePricesPercent: 0,
  servicePricesNumber: 0,
  fullPrice: 0,
  countInputs: 0,
  isError: false,
  init: function() {
    this.addTitle()
    this.addRollback()
    startBtn.addEventListener("click", this.start)
    buttonPlus.addEventListener("click", this.addScreensBlock)
    this.addScreens()
    resetBtn.addEventListener("click", this.reset)
  },
  addTitle: function() {
    document.title = title.textContent;
  },
  start: function() {
    appData.checkFields()
    if (!this.isError) {
      appData.addScreens();
      appData.addServices();
      appData.addPrices();
      appData.showResult();
      appData.blockInput();
    }
  },
  showResult: function() {
    total.value = this.screenPrice
    totalCountOther.value = this.servicePricesPercent + this.servicePricesNumber
    fullTotalCount.value = this.fullPrice
    totalCountRollback.value = this.servicePercentPrice
    totalCount.value = this.countInputs

  },

  addScreens: function() {
    screens = document.querySelectorAll('.screen');
    screens.forEach((screen, index) => {
      const select = screen.querySelector('select');
      const input = screen.querySelector('input');
      const selectName = select.options[select.selectedIndex].textContent

      this.screens.push ({
        id: index,
        name: selectName,
        price: +select.value * +input.value,
        countInput: +input.value,
      });
    })
  },

  addServices: function() {
    otherItemsPercent.forEach((item) => {
      const check = item.querySelector('input[type="checkbox"]');
      const label = item.querySelector('label');
      const input = item.querySelector('input[type="text"]')

      if (check.checked) {
        this.servicesPercent[label.textContent] = +input.value;
      }
    })
    otherItemsNumber.forEach((item) => {
      const check = item.querySelector('input[type="checkbox"]');
      const label = item.querySelector('label');
      const input = item.querySelector('input[type="text"]')

      if (check.checked) {
        this.servicesNumber[label.textContent] = +input.value;
      }
    })

  },
  addScreensBlock: function() {
    const cloneScreen = screens[0].cloneNode(true);
    screens[screens.length - 1].after(cloneScreen);
    screens = document.querySelectorAll('.screen');
  },

  addPrices: function() {
    for (let screen of this.screens) {
      this.screenPrice += screen.price;
      this.countInputs += screen.countInput;
    }
    for (let key in this.servicesNumber) {
      this.servicePricesNumber += this.servicesNumber[key]
    }
    for (let key in this.servicesPercent) {
      this.servicePricesPercent += this.screenPrice * (this.servicesPercent[key] / 100)
    }
    this.fullPrice = +this.screenPrice + this.servicePricesNumber + this.servicePricesPercent;
    this.servicePercentPrice = this.fullPrice - (this.fullPrice * (this.rollback / 100));
  },

  addRollback: function() {
    rollbackInput.addEventListener("input", function() {
      rollbackSpan.innerHTML = rollbackInput.value;
      this.rollback = +rollbackInput.value
    });

  },

  blockInput: function () {
    screens = document.querySelectorAll('.screen');
    screens.forEach((screen) => {
      const select = screen.querySelector('select');
      select.disabled = true;
      startBtn.style.display = 'none';
      resetBtn.style.display = 'block';
    }); 
    const inputs = document.querySelectorAll('input');
    inputs.forEach((input) => {
        input.disabled = true;
    });
  },

  reset: function() {
    screens = document.querySelectorAll('.screen');
    screens.forEach((screen) => {
    const select = screen.querySelector('select');
      select.disabled = false;
      select.value = '';
      startBtn.style.display = 'block';
      resetBtn.style.display = 'none';
    }); 

    otherItems.forEach((input) => {
      input.disabled = true;
    });
    totalItemsInput.forEach((input) => {
      input.disabled = true;
      input.value = '';
    });
    const inputs = document.querySelectorAll('input')[0];
        inputs.disabled = false;
        inputs.value = '';
    checkbox.forEach((item) => {
      item.checked = false;
      item.disabled = false;
    });
    range.value = 0;
    range.disabled = false;
   },

  checkFields: function() {
    this.isError=false;
    screens = document.querySelectorAll('.screen');
    screens.forEach((screen) => {
      const select = screen.querySelector('select');
      const input = screen.querySelector('input');
      for (let i = 0; i < screens.length; i++) {
        if (select.value.length === 0 || input.value.length === 0) {
          this.isError = true;
        }
      }
    })
  },
};

appData.init();