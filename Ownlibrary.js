function hasCollided(object1,object2) {

if(object2.x - object1.x <= object1.width/2 + object2.width/2){
    //console.log("hi");
return true;
}
else {
    return false;
}
}