


// Mouse
let Rat = function () {
    this.name = undefined;
    this.weight = undefined;
    this.speed = Math.floor(Math.random()*20);
    this.status = true;

}
Rat.prototype.say = function (){
    return " Chit chit";
}

// Cat
let Cat = function () {
    this.name = undefined;
    this.weight = undefined;
    this.speed = Math.floor(Math.random()*20);
    this.catched = false;
}

Cat.prototype.say = function () {
    alert("Meo Meo");

}
Cat.prototype.catch = function (mouse) {
    if (this.speed > mouse.speed){
        this.catched = true;
        alert('Bat duoc chuot');
    }else {
        this.catched = false;
        alert("Hut roi leu leu !");
        location.reload();
    }
}

Cat.prototype.eat = function (mouse) {
    if (this.catched && mouse.status){
        this.weight += mouse.weight;
        mouse.status = false;
        //alert(this.weight);
    }else {

        alert("Chua bat duoc chuot");

    }
}







//console.log(cat);


let cat = new Cat();



let mouse = new Rat();



function initCat() {

    cat.name = "Tom";
    cat.weight = 20;
    //cat.speed = 40;

    let _cat = document.createElement('input');
    _cat.id = "cat";
    _cat.setAttribute('type','button');
    _cat.setAttribute('value',"CAT "+ cat.weight);
    document.body.appendChild(_cat);

}

function initMouse() {

    mouse.name = "Jerry";
    mouse.weight = 5;
    //mouse.speed = 30;

    let _mouse = document.createElement('input');
    _mouse.id = "mouse";
    _mouse.setAttribute('type','button');
    _mouse.setAttribute('value','MOUSE '+ mouse.weight);
    document.body.appendChild(_mouse);
}


function catchMouse() {

    return cat.catch(mouse);
}

function eatMouse() {
    cat.eat(mouse);
    document.getElementById('cat').value = "CAT "+ cat.weight;
    document.getElementById('mouse').remove();
}


function init() {

    initCat();
    initMouse();

    let _catch = document.createElement('input');
    _catch.setAttribute('type','button');
    _catch.setAttribute('value','CATCH');
    _catch.addEventListener('click',catchMouse);
    document.body.appendChild(_catch);

    let _eat = document.createElement('input');
    _eat.setAttribute('type','button');
    _eat.setAttribute('value','EAT');
    _eat.addEventListener('click',eatMouse);
    document.body.appendChild(_eat);
    //cat.eat(mouse);

    console.log(cat)
    console.log(mouse)

}
