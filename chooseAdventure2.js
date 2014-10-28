var user= prompt("What is your name?").toUpperCase();

switch(user){
    case 'Mary':
        var montyPython= prompt("Are you boring or English?").toUpperCase();
        if (montyPython=== "boring" || "english"){
        	
        	console.log("cool.");
        }
        else if (montyPython==="boring"&&"english") {
        	console.log("227");
        } {
        	console.log("are you scottish?");
        }
        break;
    case 'Tony':
        var comeback = prompt("Raphael Saadiq was in Tony. Toni. Tone");
       if ( comeback= "boy") {
       	 	console.log("are you a lumberjack?");
       	 	 
       	 
       } 
       else{
       	console.log("are you a lumberjill?")
       }
       break;
    case 'Erin':
        console.log("What a lovely name!");
        break;
default:
    console.log("Everybody has a name.");
}