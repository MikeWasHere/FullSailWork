/**
 * Created with JetBrains WebStorm.
 * User: MikeWasHere
 * Date: 7/26/13
 * Time: 9:37 AM
 * To change this template use File | Settings | File Templates.
 */

//This is going to create functions

// arrayWithStats is a test array to be removed after testing
var arrayWithStatsPass=[];
arrayWithStatsPass[0]='Monster';
arrayWithStatsPass[1]='plains';



//**********************************ARRAYWITHSTATS END*******************************************

creatureBaseStatProto[0]=[0,20,1,.5,.01,0,'player',[1,1]];
creatureBaseStatProto[1]=[0,5,2,.2,.2,10,'Goblin',[1,10]];
creatureBaseStatProto[2]=[50,100,10,.5,0,150,'fat sad dragon'[1,1]];
creatureBaseStatProto[3]=[0,20,1,.5,.01,0,'horse',[1,100]];
creatureBaseStatProto[4]=[0,20,1,.5,.01,0,'slimy slippery,snake'[1,100]];
creatureBaseStatProto[5]=[0,20,1,.5,.01,0,'Professor',[1,5]];
var player = 0;
var goblin = 1;
var dragon = 2;
var horse = 3;
var sss = 4;
var professor = 5;
var armor = 0;
var health = 1;
var damage = 2;
var toHit = 3;
var dodge = 4;
var exp = 5;
var title = 6;
var horde = 7;
var hordeMin = 0;
var hordeMax = 1;

function makeCreature(arrayWithStats)
{
 var playerOrMonster = arrayWithStats[0];
    var stats=[];
    if (playerOrMonster=='player') {

          //Armor=0, Health=1, Damage=2, %toHit=3, %toDodge=4, exp
         // starting armor value = 0
        stats[0]=0;
        //Starting health 20
        stats[1]=20;
        //starting damage =1 (punching)
        stats[2]=1;
        //starting %hit =50%
        stats[3]=0.5;
        //%toDodge=1%
        stats[4]=.01;
        //exp =0
        stats[5]=0;
        //name
        stats[6]='playerCharName';

    }

  if(playerOrMonster=='Monster'){

      switch(arrayWithStats[1]){
          case "swamp":
             var hordeSize=Math.floor(Math.random()*
                 (creatureBaseStatProto[sss][horde][hordeMax] -
                     creatureBaseStatProto[sss][horde][hordeMin]))
                         +creatureBaseStatProto[sss][horde][hordeMin] ;
              for(i=hordeSize;i>0;i--){
                  encounters[i] =creatureBaseStatProto[sss];
                  console.log(encounters[i]);
              }
              break;
          case "planes":
              var dragonsOrHorse =Math.random();
              if(dragonOrHorse<=.5){
                  break;
              }
              else {
                  break;
              }
              //slimy sneaky slippery snake
              stats[0]=1;
              stats[1]=5;
              stats[2]=2;
              stats[3]=.2;
              stats[4]=.2;
              stats[5]=10;
              break;
          case "plains":
              var dragonOrHorse =Math.random();
              if(dragonOrHorse<=.5){
              //dragon
                  stats[0]=50;
                  stats[1]=105;
                  stats[2]=10;
                  stats[3]=.5;
                  stats[4]=0;
                  stats[5]=150;
                  stats[6]='fat sad dragon';
                  break;

              }
              else {
              //horse
                  stats[0]=0;
                  stats[1]=20;
                  stats[2]=4;
                  stats[3]=.1;
                  stats[4]=3;
                  stats[5]=25;
                  stats[6]='horse';


              }

      }


  }

  function statVariance( baseValue, percentVariance){
      var variance=percentVariance*Math.random();

  }
    return stats;
}
 var playercharacter = makeCreature(arrayWithStatsPass);
console.log(playercharacter);