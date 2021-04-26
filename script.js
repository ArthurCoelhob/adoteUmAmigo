/* Slide*/
let tempo = 2000,
    indexImgAtual = 0,
    images = document.querySelectorAll("#slider img"),
    maximo = images.length

function novaImagem() {

    images[indexImgAtual]
        .classList.remove("selecionado")

    indexImgAtual++

    if (indexImgAtual >= maximo)
        indexImgAtual = 0

    images[indexImgAtual].classList.add('selecionado')

}


function inicio() {
    setInterval(() => {
        novaImagem()
            // para trocar de imagem
    }, tempo)
}

window.addEventListener('load', inicio)