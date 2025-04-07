// De bal aanmaken en classes aangeven, bijvoorbeeld hoe groot die is.
class Ball extends Rectangle {
    constructor(x=0,y=0,color){
        super(x,y,30,30,color);
        this.speed = 0;
        this.startY = y;
        this.startX = x;
        this.angle = 0;
        this.locked = false;
        this.out = false;
        this.velocity.x=  (getRandomNumBetween(0,1)===1) ? getRandomNumBetween(-50,-150): getRandomNumBetween(50,150);
        this.velocity.y=  (getRandomNumBetween(0,1)===1) ? getRandomNumBetween(-50,-150): getRandomNumBetween(50,150);
        console.log(this.velocity.y);
        console.log(this.velocity.x);
        this.reset();
    }
//Als er gescoord word komt de ball weer in het midden.
    reset(x=this.startX, y=this.startY) {
        this.setPosition(x, y);
        this.setSpeed(150);
        this.setAngle( getRandomNumBetween(1,2)===1 ? getRandomNumBetween(150,210) : getRandomNumBetween(330,390) );
        this.out = false;
    }

    setPosition(x, y) {
        this.position.x = x;  
        this.position.y = y;
    }
//De snelheid bepalen
    setSpeed(speed) {
        this.speed = Math.ceil(speed);
        console.log('setSpeed('+this.speed+')');
        console.log('velocity = '+this.velocity.x, this.velocity.y);

    }
// de y,x hoek berekenen
    setAngle(degrees) {
        const radians = this.toRadians(degrees);
        this.velocity.x = this.speed *  Math.cos(radians);
        this.velocity.y = this.speed * -Math.sin(radians);
    }

    toRadians(degrees) { return degrees * (Math.PI / 180) }
	toDegrees(radians) { return (radians * 180) / Math.PI }

}