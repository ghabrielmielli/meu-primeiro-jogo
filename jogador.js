class Jogador {

    constructor(){
        this.x = 300;
        this.y = 500;
        this.vel = 650;
        this.aceleracao = 0.15;
        this.largura = 26;
        this.altura = 32;
    }

    desenha() {

        
       if (keyState[37]){
           if(lado == "dir"){
                movimentoBoneco10.desenha(bonecoSprites, this.x, this.y);
                setTimeout(() => lado = "esq", 100);
                return;
           }
        switch (contador) {
            case  0:
                movimentoBoneco4.desenha(bonecoSprites, this.x, this.y);
                break;
            case 1:
                movimentoBoneco3.desenha(bonecoSprites, this.x, this.y);
                break;
            case 2:
                movimentoBoneco2.desenha(bonecoSprites, this.x, this.y);
                break;
        }
        lado = "esq";
       }

       else if (keyState[39]){
        if(lado == "esq"){
            movimentoBoneco1.desenha(bonecoSprites, this.x, this.y);
            setTimeout(() => lado = "dir", 100);
            return;
       }
        switch (contador) {
            case  0:
                movimentoBoneco7.desenha(bonecoSprites, this.x, this.y);
                break;
            case 1:
                movimentoBoneco8.desenha(bonecoSprites, this.x, this.y);
                break;
            case 2:
                movimentoBoneco9.desenha(bonecoSprites, this.x, this.y);
                break;
        }
        lado = "dir";
       }

       else if(lado == "esq"){
            movimentoBoneco5.desenha(bonecoSprites, this.x, this.y);
        }
        else{
            movimentoBoneco6.desenha(bonecoSprites, this.x, this.y);

       }
    }

}

var bonecoSprites = new Image();
bonecoSprites.src = "mario.png";

contador = 0;

setInterval(conta, 100);

function conta(){
    contador = ++contador % 3; 
}

var lado;