class Player{
    constructor(){
        this.index=null;
        this.name=null;
        this.distance=0;
        this.rank=null;
    }
    getCount(){
       var playerCountRef=database.ref('playerCount');
       playerCountRef.on("value",(data)=>{
           playerCount=data.val();
       })

       }

       updateCount(count){
        database.ref('/').update({
          gamePlayer: count
        });
    }

    update(){
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
          name:this.name,
          distance:this.distance
        });
      }

      static getPlayerInfo(){
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value",(data)=>{
          allPlayers = data.val();
        })
      }
      rankofcar(){
         database.ref('rank').on("value",(data)=>{
          this.rank = data.val();
         })
    }

      static updateRank(rank){
       database.ref('/').update({
          rank: rank
       })
      }
        

}

