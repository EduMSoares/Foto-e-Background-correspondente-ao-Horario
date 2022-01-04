function carregar(){
    var msg = window.document.querySelector('div#msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
        if (hora >= 04 && hora < 12){
            //BOMD DIA
            img.src = 'manha.png'
            document.body.style.background = '#8c7556'
        } else if (hora >=12 && hora <18){
            //BOA TARDE
            img.src = 'tarde.png'
            document.body.style.background = '#fccfbc'
        }else {
            //BOA NOITE
            img.src = 'noitte.png'
            document.body.style.background = '#9d82b9'
        }
    }
