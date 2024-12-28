var elementosDuvida = document.querySelectorAll('.duvida') //declaração da variavel + seleciona varios elementos

//forEach= para cada
elementosDuvida.forEach(function (duvida) {
    duvida.addEventListener('click', function () {
        duvida.classList.toggle('ativa')
    })
})