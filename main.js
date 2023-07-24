function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        console.log('Elemento não encontrato ou seletor inválido!');
    }

}
const listaDeTeclas = document.querySelectorAll('.tecla');
for (let count = 0; count < listaDeTeclas.length; count++) {
    const tecla = listaDeTeclas[count];
    const instrumento = tecla.classList[1];
    //template string
    const idAudio = `#som_${instrumento}`;
    listaDeTeclas[count].onclick = function () {
        tocaSom(idAudio)
    }
    tecla.onkeydown = function (event) {
        if (event.code == 'Space' || event.code === 'Enter') {
            tecla.classList.add('ativa');
        }
    }
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}

// (!=) = diferente
// || = or
/*repetição while

//variável = let
let count = 0;
while (count < listaDeTeclas.length) {
    const tecla = listaDeTeclas[count];
    const instrumento = tecla.classList[1];
    //template string
    const idAudio = `#som_${instrumento}`;
    listaDeTeclas[count].onclick = function () {
        tocaSom(idAudio)
    }
    count = count + 1;
} */