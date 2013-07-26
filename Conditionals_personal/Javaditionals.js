/**
 * Created with JetBrains WebStorm.
 * User: MikeWasHere
 * Date: 7/22/13
 * Time: 2:27 PM
 * To change this template use File | Settings | File Templates.
 */

   function ConditionsInLife (){
    var weather = prompt ("hows it looking outside (use words like 'sunny, raining, cloudy, snowing")
    var sunny = "Go to the beach with the homies"
    var raining = "stay in, order some takeout, and watch a movie with the misses"
    var cloudy = "Go out to eat with the homies..and maybe the misses, or not."
    var snowing = "Find the tallest hill, crab a trash bin, and let the games begin"

    if (weather === "sunny"){
        console.log (sunny);
}else if (weather === "raining"){
    console.log (raining);

    }else if (weather === "cloudy"){
    console.log (cloudy);

    }else if (weather === "snowing"){
    console.log (snowing);

}else{
    prompt("you didn't put anything my guy");
    }
}
ConditionsInLife();