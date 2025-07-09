const ball = {
    color: 'red',
    shape: 'round',
    canBounce: true,
    bounce: function () {
        if (this.canBounce) console.log("bouncing...");
        else console.log("I can't bounce...");
    }
}

console.log(ball.color);
console.log(ball["shape"]);
ball.bounce()