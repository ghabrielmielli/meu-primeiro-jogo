class Quadrado {

    constructor(){
        this.x = 300;
        this.y = 500;
        this.largura = this.altura = 20;
        this.vel = 12;
        this.aceleracao = 0.4;
        this.cor = "white";
    }

    desenha() {
        ctx.fillStyle = this.cor;
        ctx.fillRect(this.x, this.y, this.largura, this.altura);
    }
}