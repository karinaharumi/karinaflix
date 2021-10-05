function CarregarFilmes(){
   //array --> varaiavel com subdivisões (índices)
let filmes ["imagens/filme1.png" , "imagens/filme2.png", "imagens/filme3.png"]
}

for(let controle = 0 ; controle < 6; controle = controle + 1){
    document.querySelector(".lista-filmes").innerHTML += "img src="+ filmes [controle] + ">"
}