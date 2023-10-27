var gasolina, etanol;

function melhor(){
    etanol = parseFloat(frdados.txetanol.value.replace(",","."));
    gasolina = parseFloat(frdados.txgasolina.value.replace(",","."));

    if(etanol < 0.7*gasolina){
        document.getElementById("imagem").src="imagens/etanol.png";
    }else{
        
        document.getElementById("imagem").src="imagens/gasolina.jpg";
    }
}

function limpar(){
    
    document.getElementById("imagem").src="imagens/velocimetro.png";
}