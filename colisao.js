
function verificaColisao(){
    meteoros.forEach(function(meteoro) {

        if(bagui.y <= meteoro.y + meteoro.altura &&
            bagui.y + bagui.altura >= meteoro.y &&
            
            bagui.x <= meteoro.x + meteoro.largura &&
            bagui.x + bagui.largura >= meteoro.x
            )
            perdeu();

    });

}

function perdeu() {
    console.log("fui chamado");
    meteoros = [];
    estadoJogo = estados.perdeu;
    salvarRecorde();
}