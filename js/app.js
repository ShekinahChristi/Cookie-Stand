'use strict'

const hoursOpen = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm']

const seattle = {
  name: 'Seattle',
  minCustomers: 23,
  maxCustomers: 65,
  avgCookies: 6.3,
  salesData: [],
  getRandomCustomers: function () {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
  }
};

const tokyo = {
  name: 'Tokyo',
  minCustomers: 3,
  maxCustomers: 24,
  avgCookies: 1.2,
  salesData: [],
  getRandomCustomers: function () {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
  }
};


const dubai = {
  name: 'Dubai',
  minCustomers: 11,
  maxCustomers: 38,
  avgCookies: 3.7,
  salesData: [],
  getRandomCustomers: function () {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
  }
};

const paris = {
  name: 'Paris',
  minCustomers: 2,
  maxCustomers: 38,
  avgCookies:2.3,
  salesData: [],
  getRandomCustomers: function () {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
  }
};

const lima = {
  name: 'Lima',
  minCustomers: 2,
  maxCustomers: 16,
  avgCookies: 4.6,
  salesData: [],
  getRandomCustomers: function () {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
  }
};

function cookieCount(city) {
  let h2 = document.createElement('h2');
  h2.innerText = city.name;
  let main = document.getElementById('cities');
  main.appendChild(h2);
  let ul = document.createElement('ul');
  main.appendChild(ul);
  let totalSales = 0;
  for (let i = 0; i < hoursOpen.length; i++) {
    let li = document.createElement('li');
    let hourlySales = Math.floor(
      city.getRandomCustomers() * city.avgCookies
    );
    totalSales += hourlySales;
    console.log(totalSales);
    li.innerText = `${hoursOpen[i]}: ${hourlySales} cookies`;
    ul.appendChild(li);
  }
  let total = document.createElement('li');
  total.innerText = `Total: ${totalSales} cookies`;
  ul.appendChild(total);
}

cookieCount(seattle);
cookieCount(tokyo);
cookieCount(dubai);
cookieCount(paris);
cookieCount(lima);