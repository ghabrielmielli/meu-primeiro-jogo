class Sprite {
    constructor(x, y, largura, altura){
        //começo da captura da imagem no arquivo
        this.x = x;
        this.y = y; 

        //tamanho da captura
        this.largura = largura;
        this.altura = altura;
    }

    desenha(img, xCanvas, yCanvas){ //x e y de onde a imagem começará a ser desenhada no canvas
        ctx.drawImage(img, this.x, this.y, this.largura, this.altura, xCanvas, yCanvas, this.largura * 1.5, this.altura * 1.5);
    }
}

var movimentoBoneco1 = new Sprite(17.6 * 0, 0, 17.6, 32);
var movimentoBoneco2 = new Sprite(17.6 * 1, 0, 17.6, 32);
var movimentoBoneco3 = new Sprite(17.6 * 2, 0, 17.6, 32);
var movimentoBoneco4 = new Sprite(17.6 * 3, 0, 17.6, 32);
var movimentoBoneco5 = new Sprite(17.6 * 4, 0, 17.6, 32);
var movimentoBoneco6 = new Sprite(17.6 * 5, 0, 17.6, 32);
var movimentoBoneco7 = new Sprite(17.6 * 6, 0, 17.6, 32);
var movimentoBoneco8 = new Sprite(17.6 * 7, 0, 17.6, 32);
var movimentoBoneco9 = new Sprite(17.6 * 8, 0, 17.6, 32);
var movimentoBoneco10 = new Sprite(17.6 * 9, 0, 17.6, 32);
