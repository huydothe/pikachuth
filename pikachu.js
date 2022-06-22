function Hero(image, top, left, size,speed){
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
    this.speed=speed;

    this.getHeroElement = function(){
        return '<img width="'+ this.size + '"' +
            ' height="'+ this.size + '"' +
            ' src="' + this.image +'"' +
            ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
    }

    this.moveRight = function(){
        this.left += this.speed;
        console.log('ok: ' + this.left);
    }
    this.moveDown = function (){
        this.top +=this.speed;
        console.log('ok: ' + this.top);
    }
    this.moveLeft = function (){
        this.left -= this.speed;
    }
    this.moveUp = function (){
        this.top-= this.speed;
    }
}

let hero = new Hero('../pikachu/pikachu.png', 20, 30, 200,100);

function start(){
    if(hero.left < window.innerWidth - hero.size && hero.top < window.innerHeight-hero.size){
        hero.moveRight();
        console.log(1);
    }
    else if( hero.left >= window.innerWidth - hero.size && hero.top < window.innerHeight-hero.size) {
        hero.moveDown();
        console.log(2);
    }
    if( hero.top >= window.innerHeight - hero.size && hero.left - hero.size >= 0) {
        hero.moveLeft();
        console.log(3);
    }
    if(hero.left - hero.size <= 0 && hero.top-hero.size >= 0) {
        hero.moveUp();
        console.log(4);
    }

    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 500)
}
start();