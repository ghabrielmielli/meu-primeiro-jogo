var meteoros = [];

var corMeteoro = "red";

var cores = ["red", "orange", "yellow", "blue"];


function gerarMeteoro(aceleracao, velocidade){
    var meteoro = new Quadrado();
    meteoro.cor = corMeteoro;
    meteoro.altura = meteoro.largura = randomInt(15, 50);

    meteoro.y = 0 - meteoro.altura;
    meteoro.x = randomInt(0, LARGURA - meteoro.largura);

    meteoro.vel = (velocidade || randomInt(0, 4));
    meteoro.aceleracao = (aceleracao || randomFloat(0.02, 0.2));

    return meteoro;
}



function gerador(){
    if (pontos > 450){
        meteoros.push(gerarMeteoro(randomFloat(-0.2, 0.4), randomInt(2, 11)))
        corMeteoro = cores[randomInt(0,3)];
    }

    if (pontos > 380){
        meteoros.push(gerarMeteoro(randomFloat(-0.2, -0.08), 14));
        corMeteoro = "blue";
    }

    else if (pontos > 250){
        meteoros.push(gerarMeteoro(-0.01 , 4));
        corMeteoro = "yellow";
    }
    else if (pontos > 150){
        meteoros.push(gerarMeteoro(0.4));
        corMeteoro = "orange";
    }
    else{
        meteoros.push(gerarMeteoro());
    }

    if(estadoJogo == estados.jogando)
        setTimeout(gerador, getDificuldade());
}


function randomInt(min, max) {
    return min + Math.floor((max - min) * Math.random());
}

function randomFloat(min, max) {
    return min + (max - min) * Math.random();
}

function getDificuldade(){

    if (pontos < 30)
    return 1000 - pontos * 20;

    else if (pontos < 60)
        return 700 - pontos * 10;

    else if (pontos < 100)
        return 220;

    else if (pontos < 150)
        return 180;

    else if (pontos < 250)
        return 300;

    else if (pontos < 380)
        return 130;

    else
        return 350;

    

        
        
}
