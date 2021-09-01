class Game {
  constructor() {}

  start() {
    
    form = new Form();
    form.display();
    player = new Player();
  }
}

//gamestate =>
//0 = start (form)
//1 = play (race)
//2 = end (finish the race)
//oop - object oriented programmimg
//class = blueprint 
//objects