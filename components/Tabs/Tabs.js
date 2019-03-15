class TabLink {
  constructor(tabElement){
      this.tabElement = tabElement;
      this.tabData = tabElement.dataset.tab;
      
      if (this.tabData === 'all') {
          this.cards = document.querySelectorAll('.card');
      } else {
          this.cards = document.querySelectorAll(`.card[data-tab='${this.tabData}']`);
      }
      
      
      this.tabCards = Array.from(this.cards).map( card => new TabCard(card));
      
      this.tabElement.addEventListener('click', () => this.selectTab());
    }
    
    selectTab() {
     const tabs = document.querySelectorAll('.tab');
    
     tabs.forEach ( tab => tab.classList.remove('active-tab'));
        
    this.tabElement.classList.add('active-tab');

     const cards = document.querySelectorAll('.card');
    console.log(this.cards);    
        
     
     cards.forEach( card => card.style.display = 'none');
    this.tabElement.classList.add('.active-tab');
        
     this.tabCards.forEach(card => card.selectCard());
        
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






      