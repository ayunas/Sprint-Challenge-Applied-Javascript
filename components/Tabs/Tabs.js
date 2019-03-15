class TabLink {
  constructor(tabElement){
      this.tabElement = tabElement;
      this.tabData = tabElement.dataset.tab;
      
      if (this.tabData === 'all') {
          this.cards = document.querySelectorAll('.card');
      } else {
          this.cards = document.querySelectorAll(`.card[data-tab='${this.tabData}']`);
      }
      
      this.cards.forEach( card => new TabCard(card));
      
//      this.selectTab = 
      // Add a click event that invokes this.selectTab
    // this.tabElement.addEventListener();
    }
    
    selectTab() {
     const tabs = document.querySelectorAll('.tab');
    
     tabs.forEach ( tab => tab.classList.remove('.active-tab') );

     const cards = document.querySelectorAll('.card');
     
     cards.forEach( card => card.style.display = 'none');
    this.tabElement.classList.add('.active-tab');
  
     this.cards.forEach(card => card.selectCard());
  }
}


class TabCard {
  constructor(cardElement){
    this.cardElement = cardElement;
  }
    
  selectCard(){
     this.cardElement.style.display = 'flex';
  }

}   

let tabs = document.querySelectorAll('.tab');

tabs.forEach( tab => new TabLink(tab) );

//so how do you gain access to each individual tab JS object created with the constructor function?






      