'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm',];

let container = document.getElementById('container')
let tableEl = document.createElement('table');
container.appendChild(tableEl);

let shops = [];

function Shop(shopName, min, max, avgCookies){
  this.shopName = shopName;
  this.minCust = min;
  this.maxCust = max;
  this.avgCookies = avgCookies;

  this.randCusts = []; 
  this.avgCookiesPerH = [];
  this.total = 0;
  shops.push(this)
}

Shop.prototype.calcRandCustPerH= function(){
  for(let i=0; i < hours.length; i++){
    let min = Math.ceil(this.minCust);
    let max = Math.floor(this.maxCust);
    let randCust = Math.floor(Math.random() * (max - min) + 1)
    this.randCusts.push(randCust);
    console.log(randCust)
    // console.log(this.minCust)
    // console.log(this.maxcust)
    // console.log(max)
  }
 
}

Shop.prototype.calAvgCookiesPerH = function(){
  for (let i = 0; i < hours.length; i++){
  this.avgCookiesPerH[i] = Math.ceil(this.randCusts[i] * this.avgCookies);
    this.total = this.total + this.avgCookiesPerH[i];
  }

}


Shop.prototype.render = function(){
let trEl = document.createElement('tr');
let tdEl = document.createElement('td');
tdEl.textContent = this.shopName;
trEl.appendChild(tdEl);
for (let i=0; i < hours.length; i++){
     let tdEl = document.createElement('td');
     tdEl.textContent = this.avgCookiesPerH[i];
     trEl.appendChild(tdEl);
}

let tdTotalEl = document.createElement('td');
tdTotalEl.textContent = this.total;
trEl.appendChild(tdTotalEl);
tableEl.appendChild(trEl);

}


function createTableHeader(){
  let trEl = document.createElement('tr')
  let thShopNameEl = document.createElement('th')
  trEl.appendChild(thShopNameEl);
  thShopNameEl.textContent = 'shop name';
  for (let i = 0; i < hours.length; i++) {
    let thEl = document.createElement('th')
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);

  }
  let thDailyTotalEl = document.createElement('th')
  trEl.appendChild(thDailyTotalEl);
  thDailyTotalEl.textContent = 'Daily Location Total'
  tableEl.appendChild(trEl)
}

function creatFooter(){
  let tfootEl = document.createElement('tfoot');
  let tdEl = document.createElement('td')
  tdEl.textContent = 'Totals';
  tfootEl.appendChild(tdEl)
  tableEl.appendChild(tfootEl)
}
let seattle = new Shop('seattle', 23, 65, 6.3);
let Tokyo = new Shop('Tokyo', 3, 24, 1.2);
let Dubai = new Shop('Dubai', 11, 38, 3.7);
let Paris = new Shop('Paris', 20, 38, 2.3);
let Lima = new Shop('Lima', 2, 16, 4.6);



seattle.calcRandCustPerH();
seattle.calAvgCookiesPerH();

Tokyo.calcRandCustPerH();
Tokyo.calAvgCookiesPerH();

Dubai.calcRandCustPerH();
Dubai.calAvgCookiesPerH();

Paris.calcRandCustPerH();
Paris.calAvgCookiesPerH();

Lima.calcRandCustPerH();
Lima.calAvgCookiesPerH();

createTableHeader();

seattle.render();
Tokyo.render();
Dubai.render();
Paris.render();
Lima.render();

creatFooter();










// function Student(whatever, age, grade){
//   this.whatever = whatever;
//   this.age = age;
//   this.grade = grade;
//   // or this.sayHi = function (){
//   //   console.log(`hi my name is ${this.Student}`)
//   // }
//   students.push(this);
// }

// let Bassel = new Student('Bassel', 35,99 )
// let Saddam = new Student('saddam',24,100)

// let student = [Bassel, Saddam]
// console.log(student);

// Student.prototype.sayHi = function (){
//   console.log(`hi my name is ${this.Student}`)
// }
   
// Bassel.sayHi();