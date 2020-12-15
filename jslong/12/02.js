const 戰士 = {
    hp: 100, 
    mp: 10, 
    attack: function() {
    }
  }
  
  const 法師 = {
    hp: 50, 
    mp: 100, 
    heal: function(){
      this.hp += 10
    }
  }
  
  console.log(戰士);
  法師.heal.apply(戰士)
  console.log(戰士);