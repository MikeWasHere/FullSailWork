/**
 * Created with JetBrains WebStorm.
 * User: MikeWasHere
 * Date: 7/31/13
 * Time: 9:52 AM
 * To change this template use File | Settings | File Templates.
 */

//list out equipment for mobs and loot to be dropped

//armor, shield, sword, gold, diamonds, amazon gift card, bunch o crap, potion of health.
//diamonds, gold, iron, bronze, gold, glass, wood
//elven, dwarven, valarian, nord, goblin, draconic

var intStuff2 = [
    ['armor', 'shield', 'sword', 'gold', 'diamonds', 'amazon gift card', 'bunch o crap', 'potion of health'],
    ['diamonds', 'gold', 'iron', 'bronze', 'gold', 'glass', 'wood'],
    ['elven', 'dwarven', 'valarian', 'nord', 'goblin', 'draconic']
];


function makestuff(intStuff, creatureType)
{
   var itemType = 0;
   var material = 1;
   var racialCoponent = 2;
   var lenitem = intStuff[itemType].length;
   var lenMat = intStuff[material].length;
   var lenRac = intStuff[racialCoponent].length;

   var itemTypeName = Math.floor(Math.random()* lenitem) ;
   var materialName = Math.floor(Math.random()* lenitem) ;
   var racialCoponentName = Math.floor(Math.random()* lenitem) ;
        console.log(lenMat);
    return intStuff[material][materialName]+' '+ intStuff[racialCoponent][racialCoponentName]+' '+ intStuff[itemType][itemTypeName]

}

console.log(makestuff(intStuff2));
