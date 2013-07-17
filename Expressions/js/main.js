//Expressions worksheet
  console.log("---in this expression we are going to find out how old sparky in human years.---")
// In this problem i am going to say sparky is about 7 years old in human years, lets see how old he is in doggy years
    var humanYears = 3;
    var dogYears = 7;
    var sparkysAge = dogYears * humanYears;

    console.log(sparkysAge); //---Sparkys age in human years


console.log("---this is the slice of pie I---")
//in this problem we are going to find ouit how many slices each person gets
    var slicesPerBox = 8;
    var peopleAtParty = 41;
    var boxesOrdered = 10;
    var howManySlicesPeopleGet = slicesPerBox * boxesOrdered / peopleAtParty;

    console.log(howManySlicesPeopleGet);


console.log("---slice of pie part II---")
// in this we are going to find out how many slices sparky ate
    var howManySlicesSparkyGot = slicesPerBox * boxesOrdered % peopleAtParty;

    console.log(howManySlicesSparkyGot);


console.log("----Average shopping bill----")
// in this problem we are going to find the out how much karens mothly groceries are.
    var groceryArray = [101.32, 50.10, 10.15, 500,21, 10.13];
    var groceryTotal = groceryArray[0] + groceryArray[1] + groceryArray[2] + groceryArray[3] + groceryArray[4];
    var averageGroceries = groceryTotal / groceryArray.length; //Karen has 2 kids that all they do is eat
    //Karen goes shopping for food about 4 times a month
console.log (averageGroceries);// this is how much karen would spend in groceries a month