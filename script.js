//=== variabelen =========================
var _arrow = document.querySelector("#arrow");
var _deg = 45;
var _house = document.querySelector("h1");
var _thinkingMesages = ["Let's see", "Interesting", "So much potential", "Hmmm ..."]

//=== functions =========================

//random number function(min, max)
function random(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

//click arrow -> spin arrow -> say witch house
_arrow.addEventListener("click", spin);
function spin(evt){
    //make arrow unclickebel
    _arrow.removeEventListener("click", spin);
    
    //give arrow  new position
    _deg = _deg  + 360 + (90 * random(0,4));
    _arrow.style.transform = "rotate(" + _deg + "deg)";
    
    //random thinking mesage
    _house.innerHTML = _thinkingMesages[random(0, _thinkingMesages.length - 1)];
    
    //after spin
    setTimeout(function() {
        //make hat clickebel again
        _arrow.addEventListener("click", spin);
        
        //say witch house 
        if(_deg%360 == 45){
        _house.innerHTML = "Ravenclaw!";
        }
        if(_deg%360 == 135){
            _house.innerHTML = "Gryffindor!";
        }
        if(_deg%360 == 225){
            _house.innerHTML = "Hufflepuff!";
        }
        if(_deg%360 == 315){
            _house.innerHTML = "Slytherin!";
        }
    }, 4000);
    
}