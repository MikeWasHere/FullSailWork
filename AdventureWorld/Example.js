/**
 * Created with JetBrains WebStorm.
 * User: MikeWasHere
 * Date: 7/31/13
 * Time: 11:13 AM
 * To change this template use File | Settings | File Templates.
 */

function summerChoices () {
var summerDrinks = ['water bottle','beer','alcohol','more party favors'];
var summerFood = ['Tuna sandwich','chips','pb&j'];
var summerConditions = prompt ("who are you going to the beach with?(family or friends)")
 if (summerConditions === "family") {
 console.log ('water bottle,'+' '+ summerFood)
 }else if (summerConditions === "friends" ){
     console.log (summerDrinks +' '+ summerFood)
 }


}
   summerChoices();