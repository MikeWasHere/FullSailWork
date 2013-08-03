/**
 * Created with JetBrains WebStorm.
 * User: MikeWasHere
 * Date: 8/2/13
 * Time: 7:17 PM
 * To change this template use File | Settings | File Templates.
 */

cereal = ["Bonana jackson","scoop loops","Sexy flakes","Forever pops"];
var i=Math.random()*10;
var go = false;
while (go==false){
    i=Math.ceil(Math.random()  *10);
    if (i>=1 && i<=3){
        go = true;

    }
}
    alert(cereal[i]);
