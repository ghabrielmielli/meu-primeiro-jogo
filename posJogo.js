function salvarRecorde(){
    if (pontos > recorde){
        localStorage.setItem("recorde", pontos);
        recorde = pontos;
    }
}

function menuPerdeu(){
    ctx.fillStyle = "blue";
    ctx.fillRect(LARGURA/2 - 250, ALTURA/2 - 100, 500, 200);
    
    ctx.fillStyle = "white";
    ctx.font = "40px Arial";

    ctx.save();
    ctx.translate(LARGURA/2, ALTURA/2);
    ctx.textAlign="center";
    ctx.textBaseline="middle";

    ctx.fillText("morreu", 0,-60);

    ctx.fillText("pontos: " + pontos, -120,0);
    ctx.fillText("recorde: " + recorde, 120,0);
    
    ctx.fillText("Jogar novamente", 0,60);

    ctx.restore();
}