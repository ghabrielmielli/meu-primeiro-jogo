var keyState = [];

window.addEventListener('keydown',function(e){
    keyState[e.keyCode] = true;
},true);    
window.addEventListener('keyup',function(e){
    keyState[e.keyCode] = false;

    bagui.vel = 1;
},true);


function movimentoBagui() {
    if (keyState[37] && keyState[39]){
        bagui.vel = 1;
    }
    else if (!keyState[37] && !keyState[39]){
        bagui.vel = 1;
    }
    else if (keyState[37]){
        if (bagui.x > 0){
            bagui.vel += bagui.aceleracao;
            bagui.x -= bagui.vel;

            
        }
        if(bagui.x < 0){
            bagui.x = 0;
        }
    }    
    else if (keyState[39]){
        if (bagui.x + bagui.largura < LARGURA){
            bagui.vel += bagui.aceleracao;
            bagui.x += bagui.vel;
        }
        if (bagui.x + bagui.largura > LARGURA){
            bagui.x = LARGURA - bagui.largura;
        }
    }
}


function movimentoMeteoros(){
    meteoros.forEach(function(meteoro) {
            meteoro.y += meteoro.vel;
            meteoro.vel += meteoro.aceleracao;

            if(meteoro.y > ALTURA){
                meteoros.splice(meteoros.indexOf(meteoro), 1);
                pontos++;
            }
    });

}



