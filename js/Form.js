class Form{

    constructor(){
        this.input=createInput("Entre your name here");
        this.button=createButton('Lets play');
        this.title=createElement('h2');
        this.greeting=createElement('h2');
    }

    hide(){
        this.input.hide();
        this.button.hide();
        this.title.hide();
        this.greeting.hide();
    }

    display(){
        this.title.html("Multiplayer Car Racing Game");
        this.title.position(200,5);
        this.input.position(displayWidth/2-70,50);
        this.button.position(displayWidth/2-60,200);
       
         this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount+=1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello " + player.name)
            this.greeting.position(displayWidth/2-20,200);
         });
    }
}
