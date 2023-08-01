'use strict';
const hoursOpen = [
  '',
  ' 6am',
  '7am',
  '8am',
  '9am',
  '10am',
  '11am',
  '12pm',
  '1pm',
  '2pm',
  '3pm',
  '4pm',
  '5pm',
  '6pm',
  '7pm',
  '',
];

function City(location, maxCust, minCust, avgSale) {
  this.location = location;
  this.maxCust = maxCust;
  this.minCust = minCust;
  this.avgSale = avgSale;
}

City.prototype.getCustomer = function () {
  return Math.floor(
    Math.random() * (this.maxCust - this.minCust) + this.maxCust
  );
};
let main = document.getElementById('cities');
let table = document.createElement('table');
main.appendChild(table);
const seattle = new City('Seattle', 65, 23, 6.3);
const tokyo = new City('Tokyo', 24, 3, 1.2);
const dubai = new City('Dubai', 38, 11, 3.7);
const paris = new City('Paris', 38, 20, 2.3);
const lima = new City('Lima', 16, 2, 4.6);

const allCities = [seattle, tokyo, dubai, paris, lima];
let headerRow = document.createElement('tr');
table.appendChild(headerRow);
let tableBody = document.createElement('tbody');
table.appendChild(tableBody);

for (let i = 0; i < hoursOpen.length - 1; i++) {
  let header = document.createElement('th');
  header.textContent = hoursOpen[i];
  headerRow.appendChild(header);
  if (i === hoursOpen.length - 2) {
    let totalTh = document.createElement('th');
    totalTh.innerText = 'Daily Location Total';
    headerRow.appendChild(totalTh);
  }
}

const cityArray = [];
City.prototype.render = function () {
  const citySales = [];
  let totalSales = 0;

  let cityDataRow = document.createElement('tr');
  tableBody.appendChild(cityDataRow);
  cityDataRow.id = this.location;
  let dateRow = document.createElement('td');
  cityDataRow.appendChild(dateRow);
  dateRow.innerText = this.location;

  for (let i = 0; i < hoursOpen.length - 2; i++) {
    let hourlySales = Math.floor(this.getCustomer() * this.avgSale);
    citySales.push(hourlySales);
    let td = document.createElement('td');
    td.innerText = hourlySales;
    cityDataRow.appendChild(td);
    totalSales += hourlySales;
  }
  let totalTd = document.createElement('td');
  totalTd.innerText = totalSales;
  cityDataRow.appendChild(totalTd);
  cityArray.push(citySales);
};

function footerFunction() {
  let td = document.createElement('th');
  td.innerText = 'Totals';
  let tfoot = document.createElement('tfoot');
  table.appendChild(tfoot);
  let tr = document.createElement('tr');
  tfoot.appendChild(tr);
  tr.appendChild(td);
  const totalofTotals = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let i = 0; i < 14; i++) {
    console.log(cityArray);
    for (let j = 0; j < cityArray.length; j++) {
      totalofTotals[i] += cityArray[j][i];
      console.log(cityArray[j][i]);
    }
  }

  for (let i = 0; i < totalofTotals.length; i++) {
    let td = document.createElement('th');
    td.innerText = totalofTotals[i];
    tr.appendChild(td);
  }

  const sum = totalofTotals.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
  td = document.createElement('td');
  td.innerText = sum;
  tr.appendChild(td);
}

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();

function handleForm(event) {
  event.preventDefault();

  const location = event.target.cityLocation.value;
  const minCust = parseInt(event.target.minCust.value);
  const maxCust = parseInt(event.target.maxCust.value);
  const avg = parseInt(event.target.avgSales.value);

  const newStore = new City(location, maxCust, minCust, avg);
  newStore.render();
  newFooterFunction();
}

let additionform = document.getElementById('locationAdditionForm');
additionform.addEventListener('submit', handleForm);

function newFooterFunction() {
  let tfoot = document.querySelector('tfoot');
  tfoot.remove();
  footerFunction();
}

footerFunction();