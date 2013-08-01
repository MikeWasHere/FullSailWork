/**
 * Created with JetBrains WebStorm.
 * User: MikeWasHere
 * Date: 7/31/13
 * Time: 1:34 PM
 * To change this template use File | Settings | File Templates.
 */

 function Theshow(){
var Show = prompt("what are you in the mood for?(comedy, adventure, Action, horror, sappy love stories");
var comedy = ["go watch 40 year old virgin", "you wont regret it."];
var adventure = ["lord of the rings","game of thrones", "man on fire"];
var action = ["G.I. joe", "iron man series", "avengers", "incredible hulk"];
var horror = ["The conjuring", "chuckie series", "friday the 13th series", "jason series", "NOT THE TEXAS CHAINSAW MASSACRE - waaaaay to many remakes"]
var sappyLove = ["The notebook -_-","oh you already saw that? try love and basketball", "or titanic"];
var selectedLove = false;

    if (Show === "comedy"){
        console.log(comedy)
    }  else if (Show === "adventure"){
        console.log (adventure)
    }  else if (Show === "action"){
        console.log (action)
    }  else if (Show === "horror"){
        console.log(horror)
    }  else if (Show === "sappy love stories"){
        selectedLove = true;
        var gender = prompt ("Are you a male or female?")
    }
    if (selectedLove === true && gender === "male"){

        console.log (sappyLove +" "+ "Now proceed to shotgun a beer and do a shot of rubbing alcohol to get your man hood back")
    }
    else if (selectedLove === true && gender ==="female"){
        console.log(sappyLove)
    }
}

Theshow();