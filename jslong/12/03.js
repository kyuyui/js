function hello() {
    console.log(this);  // 會印出什麼？
  
    function world() {
      console.log(this);  // 會印出什麼？
  
      const game = {
        name: "Zelda",
        greeting: function() {
          console.log(this); // 會印出什麼？
        }
      }
      game.greeting();
    }
  
    world();
  }
  
  hello();