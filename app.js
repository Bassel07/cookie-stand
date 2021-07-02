'use strict';


let houres = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm',];

console.log(houres)

// shop location

let seattle ={
    shopName : 'seattle',
    minCust : 23,
    maxCust : 65,
    avgCookieSale : 6.3,

    numOfCustPerH:[],
    fillNumOfCustH:function () {
      console.log("fillNumOfCustH");
      for(let i=0;i<houres.length;i++){
        let min = Math.ceil(this.minCust);
        let max = Math.floor(this.maxCust);
        let randNum = Math.floor(Math.random() * (max - min) + min)
        this.numOfCustPerH.push(randNum)
      }
      console.log(this.numOfCustPerH);
    },

    numOfCookiesPerH:[],
    fillNumOfCookiesH:function () {
      console.log("fillNumOfCookiesH");
      for(let j=0;j<houres.length;j++){
        let purchesedCoockPerH = 
        this.avgCookieSale * this.numOfCustPerH[j];
        this.numOfCookiesPerH.push(Math.ceil(purchesedCoockPerH))
      }
      console.log(this.numOfCookiesPerH);
      
    },

    // render:function() {
    //   let divContainer = document.getElementById('container');
      // let h2El = document.createElement('h2')
      // divContainer.appendChild(h2El);
      // let ulEl = document.createElement('ul');
      // divContainer.appendChild(ulEl);
      // for(let i=0;i<houres.length;i++){

      // }
    // }
    

  }

 console.log(seattle);
 
 seattle.fillNumOfCustH();
 seattle.fillNumOfCookiesH();
//  seattle.render();

