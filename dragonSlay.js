var slaying = true;
var youHit = Math.floor(Math.random());
var damageThisRound = Math.floor(Math.random()* 5 + 1);
var totalDamage = 0;

var slaying=true;
while(slaying){
    console.log("Oh no! A fearsome dragon is coming!");
    slaying=false;
    if(youHit){
        console.log("Congratulations! You hath giveth the dragon a most devastating blow.");
       var totalDamage= totalDamage+=damageThisRound;
       if(totalDamage>=4){
           console.log("You hath slain the dragon!");
           slaying=false;
       }
           else{
               youHit= Math.floor(Math.random());
           }
    }
        else{
            console.log("Woe is thee! A most pitiful defeat by the beast of flame.");
        }
        slaying=false;    
}
