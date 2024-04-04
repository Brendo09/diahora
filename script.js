function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    //----------------------------------------
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    var segundos = data.getSeconds()
    if (hora < 10) {
        hora = '0' + hora
    }
    if (minutos < 10) {
        minutos = '0' + minutos
    }
    if (segundos < 10) {
        segundos = '0' + segundos
    }
    //-----------------------------------------
    var horaCompleta = hora + ':' + minutos + ':' + segundos
    if(hora >= 0 && hora < 12){
        //manha
        img.src = 'img/manha.png'
        document.body.style.background = '#557187'
        msg.style.color = '#557187'
        msg.innerHTML = `PERIODO DA MANHA , AGORA SÃO ${horaCompleta}`
    }else if(hora >= 12 && hora < 18){
        //tarde
        img.src = 'img/tarde.png'
        document.body.style.background = '#0680eb'
        msg.style.color = '#0680eb'
        msg.innerHTML = `PERIODO DA TARDE , AGORA SÃO ${horaCompleta}`
    }else{
        //noite
        img.src = 'img/noite.png'
        document.body.style.background = '#001b2d'
        msg.style.color = '#001b2d'
        msg.innerHTML = `PERIODO DA NOITE , AGORA SÃO ${horaCompleta}`
    }
}