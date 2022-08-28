function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#txtano')
    //essa variavel recolhe a informação da ID: txtano(encontrada no input)
    var res = document.querySelector('div#res')
    //essa variavel recolhea informação da ID: res(encontrada na div)
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('Dados inválidos, tente novamente.')
    }
    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = "" //essa variavel foi declarada vazia, pois ira receber conteudo com a confirmação do botão
        var img = document.createElement('img')
        img.setAttribute('id', 'foto') //este metodo permite que seja feito o input de imagens diretamente do Javascript, onde determinamos o ID de 'img' com setAttribute.
        
        if (fsex[0].checked){
            genero = 'homem'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'criancabb.png')
                //criança homem
            }
            else if (idade < 29){
                img.setAttribute('src', 'jovemadulto.png')
                //jovem
            }
            else if (idade < 59){
                img.setAttribute('src', 'adultohom.png')
                //adulto
            }
            else {
                img.setAttribute('src', 'veiohomi.png')
                //idoso
            }
        }
        else if (fsex[1].checked){
            genero = 'mulher'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'criancamuie.png')
                //criança mulher
            }
            else if (idade < 29){
                img.setAttribute('src', 'jovemmulher.png')
                //jovem mulher
            }
            else if (idade < 59){
                img.setAttribute('src', 'adultamuie.png')
                //adulta
            }
            else {
                img.setAttribute('src', 'veiamuie.png')
                //idosa
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos um(a) ${genero} com ${idade} anos. `
        res.appendChild(img) //o método appendChild(declaração da variavel) permite que seja feito a troca da imagem dinamicamente, diretamente pelo Javascript
    }

}
