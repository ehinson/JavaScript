/*jshint multistr:true */
var text= "Erin then turned to look out the window at the dull weather. Drops of rain could be heard hitting the pane, which made him feel quite sad. \"How about if I sleep a little bit longer and forget all this nonsense\", he thought, but that was something he was unable to do because he was used to sleeping on his right, and in his present state couldn't get into that position.  ";


var myName= "Erin";
var hits= [];
console.log(myName.substring(0,4));

for (var i=0; i<text.length; i++){
   if (text[i]== "E"){
    for(var j=i; j<(myName.length+i); j++){
        myname.substring.push(0,4);
       hits.push(text[j]);
    }
   } 
}
if(hits.length===0){
    console.log("Your name wasn't found!");
}
else{
    console.log(hits);
}