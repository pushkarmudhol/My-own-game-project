class Game{
    constructor(){
        
    }

    getState(){
        var gameStateRef  = database.ref('gameState');
        gameStateRef.on("value",function(data){
           gameState = data.val();
        })
    
      }

      update(state){
        database.ref('/').update({
          gameState: state
        });
      }

      async start(){
        if(gameState===0){
          player=new Player();
          
        }
      }

      play(){
        form.hide();
    
        Player.getPlayerInfo();
        player.rankOfCar();
      }

}




