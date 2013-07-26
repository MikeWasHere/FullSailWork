/**
 * Created with JetBrains WebStorm.
 * User: MikeWasHere
 * Date: 7/24/13
 * Time: 8:44 PM
 * To change this template use File | Settings | File Templates.
 */

            //this is where i make my function
function AnnualIncome() {                        //this is what i named my function
    var income = prompt("enter how much you make a month here")       //i created a variable that conveys my message to the user
    var moreMulah = (8000>2000);     //created another variable that stated a low boundary
    var AlotOfMulah = (2000<8000) ;    //this sets my high boundary
    if (moreMulah<AlotOfMulah){    // lets you know when to relay each of the messages
        console.log("You need more money in your life");
    }else{
        console.log("Give me some money");         //second answer
    }
    var guess = prompt ("how much do you think you made in a year?") //prompts you and this time gives you the ability to guess your answer
    var gRight = (AlotOfMulah>moreMulah)  // this lets you know when to relay each message
    if (AlotOfMulah) {
        console.log("not bad guy");
    } else {
        console.log("You wish");  //second answer
    }


}

AnnualIncome();