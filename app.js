'use strict';


let houres = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

// shop location

let seattle ={
    shopname : 'seattle'
    mincust : 23,
    maxcust : 65,
    avgCookiesale : 6.3,

    avgCookiesPerH: [],
    
    total:0,

    randcust : [],
    calcrandcustperH: function(){
        for(let i=0;i< houres.length; i++)
        function getRandomInt(max) {
    
        let min = Math.ceil(this.minCust);
        let max = Math.floor(this.maxCust);
        let randcust = Math.floor(Math.
            random() * (max -min + 1) + min);
        
        this.randcust.push(randcust);
        }
      }


  calAvgCookiesPerH: function () {
    for(let i=0;i< houres.length; i++){
      this.avgCookiesPerH[i]= Math.
floor(this.randcust[i]*this.avgCookies);
      this.total+= this.avgCookiesPerH[i];

    },
    render:function(){
      let divContainer = document.
      getElementById('container')
      let h2El = document.creatElement('h2')
      divContainer.appendChild(h2El)
      h2El.textContent = this.shopname;
      let ulEl = document.creatElement('ul')
      divContainer.appendChild(ulEl)
      for(let i=0;i< houres.length; i++){
        let liEl = document.creatElement('li');
        
        liEl.textContent = `${hours[i]} ${this.avgCookiesPerH[i]} cookies `;
        ulEl.appendChild(liEl);
      }
      let totalEl = document.creatElement('li');
      totalEl.textContent= 'total'this.total + 'cookies';
      ulEl.appendChild (totalEl);

    }
  }

  console.log(seattle)
seattle.calcRandCustPerH();
seattle.calAvgCookiesPerH();
seattle.render();

