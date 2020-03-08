
function menuInicio(){
    ctx.fillStyle = "blue";
    ctx.fillRect(LARGURA/2 - 200, ALTURA/2 - 100, 400, 200);
    
    ctx.fillStyle = "white";
    ctx.font = "50px Arial";

    ctx.save();
    ctx.translate(LARGURA/2, ALTURA/2);
    ctx.textAlign="center";
    ctx.textBaseline="middle";

    ctx.fillText("Don Tou Timi", 0,-40);
    ctx.fillText("Jogar", 0,40);

    ctx.restore();
}