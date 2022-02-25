
//função que toca o som que recebe um parâmetro que é tocado
function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}


//varrer lista e achar a tecla
const listaDeTeclas = document.querySelectorAll ('.tecla');
let contador = 0;
//enquanto contador for menor que duração da listadeteclas o contador cresce
//acrescentando novos itens na array listaDeTeclas
while (contador < listaDeTeclas.length ) {

    //a var tecla recebe o valor de cada item da lista de teclas 1 a 1
    const tecla = listaDeTeclas[contador]
    //a var instrumento recebe o valor de cada item das teclas com sua classe
    const instrumento = tecla.classList[1];

    //template string
    const idAudio = `#som_${instrumento}`
    //ao clicar na tecla (variavel definida), ativa a função anônima
    //a função toca um som de acordo com a concatenção de #som_ com o instrumento de cada item da array
    tecla.onclick = function () {
        tocaSom (idAudio);
    }
    contador = contador + 1;
}