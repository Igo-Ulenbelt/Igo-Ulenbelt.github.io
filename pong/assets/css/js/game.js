class Game {
    constructor() {
        // verbinden met de ponggame-canvas 
        this.canvas = document.getElementById("pong");
        this.context = this.canvas.getContext("2d");

        // een Bal-object maken

        this.ball = new Ball(this.canvas.width / 2, this.canvas.height / 2, "blue");

        // Twee spelers aanmaken in een array.
        this.players = [
            new Player(20, this.canvas.height / 2, 1), // speler links
            new Player(this.canvas.width - 20, this.canvas.height / 2, 2) //speler rechts
        ]

        // Maak headsup-display aan voor de randen en de score. 
        this.hud = new Hud(this)
        // aaray aanmaken vorr de toetsen
        this.keys = [];
        //Leest welke key je indrukt, en geeft een boolean van de key terug. 
        window.addEventListener("KEY_DOWN", (event) => {
            switch (event.detail) {
                case 'ArrowUp': this.keys[38] = true;
                    break;
                case 38: this.keys[38] = true;
                    break;
                case 'ArrowDown': this.keys[40] = true;
                    break;
                case 40: this.keys[40] = true;
                    break;
            }
        });
        window.addEventListener('KEY_UP', (event) => {
            switch (event.detail) {
                case 'ArrowUp': this.keys[38] = false;
                    break;
                case 38: this.keys[38] = false;
                    break;
                case 'ArrowDown': this.keys[40] = false;
                    break;
                case 40: this.keys[40] = false;
                    break;
            }
        });

        //gameloop
        var lastTime;
        const callback = (milliseconds) => {

            if (lastTime) {
                this.update((milliseconds - lastTime) / 1000);
                this.drawEverthing();
            }
            lastTime = milliseconds
            window.requestAnimFrame(callback);
        }
        callback();
    }
    // Beplalen hoe snel de bal gaat. 
    checkInput(player, ball) {
        switch (player.id) {
            case 1:     // Human player (links)
                player.velocity.y = 0;
                player.velocity.y += (this.keys[38] === true) ? -500 : 1;
                player.velocity.y += (this.keys[40] === true) ? 500 : 1;
                break;
            case 2:     // Computer player (rechts)
                if (player.locked) {
                    if (--player.stickyFrames === 0) {
                        player.velocity.y = 0;
                        player.locked = false;
                        //console.log('unlock');
                    }
                    return;
                } else {
                    player.velocity.y = 0;
                    player.velocity.y += ball.position.y < player.top ? -500 : 1;
                    player.velocity.y += ball.position.y > player.bottom ? 500 : 1;
                    player.stickyFrames = getRandomNumBetween(5, 20);
                    player.locked = true;
                    //console.log('lock');
                }
                break;
        }
    }
    update(deltatime) {

        if (this.ball.locked) return;
        // postitie van de bal wordt hier aangapast op basis van de velicoty
        this.ball.position.x = this.ball.position.x + this.ball.velocity.x * deltatime;
        this.ball.position.y = this.ball.position.y + this.ball.velocity.y * deltatime;

        // postitie van de players wordt hier aangapast op basis van de velocity
        this.players[0].position.y = this.players[0].position.y + this.players[0].velocity.y * deltatime;
        this.players[1].position.y = this.players[1].position.y + this.players[1].velocity.y * deltatime;

        //De functie aanroepen die de input van de players gaat checken
        this.players.forEach(player => this.checkInput(player, this.ball));

        this.checkCollisions(this.players, this.ball, this.hud.edges, deltatime);
    }


    checkCollisions(players, ball, edges, deltatime) {
        // Controleer of de bedjes van speler1 en speler2 tegen de randen aankomen
        for (let p = 0; p < players.length; p++) {
            if (players[p].top < edges[0].bottom) {
                players[p].position.y = edges[0].size.y + players[p].size.y / 2;
            } else if (players[p].bottom > edges[1].top) {
                players[p].position.y = this.canvas.height - edges[1].size.y - players[p].size.y / 2;
            }
        }

        // Controleer of de bal de onderkant of de bovenkant raakt
        if (ball.bottom > this.canvas.height - 10 || ball.top < 10) {
            ball.velocity.y = -ball.velocity.y;
        }

        if (ball.out) return;
        // Check of de bal een bedje van een speler raakt

        // Check of bal in de buurt is van speler1 of speler2
        if (ball.left + ball.velocity.y * deltatime < players[0].right || ball.right - ball.velocity.y * deltatime > players[1].left) {
            // Check op welke speler de focus moet liggen voor wat betreft de aankomende botsing
            const player = ball.position.x < this.canvas.width / 2 ? players[0] : players[1];
            // Check of er een botsing gaat plaatsvinden in de volgende frame (AABB)
            if (this.Tocollide(ball, player, deltatime)) {
                // Check of de botsing frontaal was
                if (ball.bottom > player.top && ball.top < player.bottom) {
                    console.log('frontale botsing gedetecteerd');
                    // Positioneer bal op zijkant van spelerbedje
                    ball.position.x = player.id === 1 ? player.right + ball.size.y / 2 : player.left - ball.size.y / 2;
                    // Laat bal stuiteren op de x-as
                    ball.velocity.x = -ball.velocity.x;

                    const ballY = ball.position.y | 0;
                    const playerY = player.position.y | 0;
                    const distance = ballY < playerY ? Math.abs(ballY - playerY) : -Math.abs(ballY - playerY);

                    console.log('afstand vanaf midden van bedje: ' + distance);

                    if (distance !== 0) ball.setAngle(player.id === 1 ? distance : -distance + 180);

                    Math.floor()
                    Math.random()
                    Math.ceil()
                    Math.PI

                    // Verhoog de snelheid van de bal met 10%
                    ball.setSpeed(ball.speed * 1.1);
                    // Check of de botsing van bovenaf was
                } else if (ball.position.y < player.position.y) {
                    console.log('botsing aan de bovenkant van speler gedetecteerd');
                    ball.position.y = player.top - ball.size.y / 2;
                    ball.velocity.y = player.velocity.y < 0 && player.velocity.y < ball.velocity.y ? player.velocity.y * 1.1 : -ball.velocity.y;
                    // Check of de botsing van onderaf was
                } else if (ball.position.y > player.position.y) {
                    console.log('botsing aan de onderkant van speler gedetecteerd');
                    ball.position.y = player.bottom + ball.size.y;
                    ball.velocity.y = player.velocity.y > 0 && player.velocity.y > ball.velocity.y ? player.velocity.y * 1.1 : -ball.velocity.y;
                }
            }

            // Check of de bal 'out' is
            if (ball.right < 0 || ball.left > this.canvas.width) {
                this.hud.addScore(player.id === 1 ? 2 : 1);
                ball.out = true;
                setTimeout(() => {
                    this.ball.reset();
                }, 1000);
            }
        }
    }
    //Als de ball erchtens tegen aan bots, dat die dan de andere kant opgaat. 
    Tocollide(rect1, rect2, dt) {
        if (rect1.left + rect1.velocity.x * dt < rect2.right + rect2.velocity.x * dt &&
            rect1.right + rect1.velocity.x * dt > rect2.left + rect2.velocity.x * dt &&
            rect1.top + rect1.velocity.y * dt < rect2.bottom + rect2.velocity.y * dt &&
            rect1.bottom + rect1.velocity.y * dt > rect2.top + rect2.velocity.y * dt) {
            console.log("bots")
            
            return true;
        } else {
            return false;
        }
    }

    drawEverthing() {
        // Maak de context van de canvas leeg en verwijder de pixels
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        //de bal tekenen
        this.drawRectangle(this.context, this.ball,);

        // De players tekenen.
        for (var i = 0; i < this.players.length; i++) {
            this.drawRectangle(this.context, this.players[i],);
        }

    }
    drawRectangle(ctx, rect, color = "white") {
        //Kleur in stellen waarmee je wilt tekenen
        ctx.fillStyle = color;
        // Teken de rechthoek op de canvas
        ctx.fillRect(rect.left, rect.top, rect.size.x, rect.size.y);
    }
}



