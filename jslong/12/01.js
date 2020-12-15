
var hero = {
    name: '悟空',
    sayMyName: function() {
      console.log(this.name);
    }
  };
  
  hero.sayMyName();   // A 悟空
  
  var speakOut = hero.sayMyName;
  speakOut();         // B undefind
  
  const someone = { name: '路人' }
  
  hero.sayMyName.call(someone);  // C 路人
  
  function here() {
    console.log(this);
  }
  
  const there = () => {
    console.log(this);
  }
  
  here();   // D 全域變數
  there();  // E 全域變數