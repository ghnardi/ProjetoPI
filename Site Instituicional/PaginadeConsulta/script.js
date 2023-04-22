dashdash1.style.display = 'flex'
dashdash2.style.display = 'none'
dashdash3.style.display = 'none'
dashdash4.style.display = 'none'
menuleft1.style.display = 'flex'
menuleft2.style.display = 'flex'
menuleft3.style.display = 'flex'
menuleft4.style.display = 'flex'
dashdashtexto.innerHTML = `DASHBOARD DA ALA 1`




function clickMenuLeft() {
    if (menuleft1.style.display == "flex") {
        menuleft1.style.display = 'none'
        menuleft2.style.display = 'none'
        menuleft3.style.display = 'none'
        menuleft4.style.display = 'none'
        iconmenuleft.style.transform = 'rotate(360deg)'
    } else {
        menuleft1.style.display = 'flex'
        menuleft2.style.display = 'flex'
        menuleft3.style.display = 'flex'
        menuleft4.style.display = 'flex'
        iconmenuleft.style.transform = 'rotate(180deg)'
    }
}

function clickMenu() {
    if (menumenu.style.display == "flex") {
        menumenu.style.display = 'none'
        iconmenumenu.innerHTML = 'menu'
    } else {
        menumenu.style.display = "flex"
        iconmenumenu.innerHTML = "close"
    }
}

function clickBloco1() {
    if (dashdash1.style.display == 'none') {
        menuleft2.style.backgroundColor = '#2E2109'
        menuleft3.style.backgroundColor = '#2E2109'
        menuleft4.style.backgroundColor = '#2E2109'

        dashdash2.style.display = 'none'
        dashdash3.style.display = 'none'
        dashdash4.style.display = 'none'
        dashdash1.style.display = 'flex'

        menuleft1.style.backgroundColor = '#775201'
        dashdashtexto.innerHTML = `DASHBOARD DA ALA 1`
    } else if (dashdash2.style.display == 'none' && dashdash3.style.display == 'none' && dashdash4.style.display == 'none' && dashdash1.style.display == 'flex'){
    }

}

function clickBloco2() {
    
    if (dashdash2.style.display == 'none') {
        menuleft1.style.backgroundColor = '#2E2109'
        menuleft3.style.backgroundColor = '#2E2109'
        menuleft4.style.backgroundColor = '#2E2109'
        menuleft2.style.backgroundColor = '#775201'

        dashdash1.style.display = 'none'
        dashdash3.style.display = 'none'
        dashdash4.style.display = 'none'
        dashdash2.style.display = 'flex'
        dashdashtexto.innerHTML = `DASHBOARD DA ALA 2`

    } else if (dashdash2.style.display == 'flex' && dashdash3.style.display == 'none' && dashdash4.style.display == 'none' && dashdash1.style.display == 'none'){
    }

}

function clickBloco3() {

    if (dashdash3.style.display == 'none') {
        menuleft1.style.backgroundColor = '#2E2109'
        menuleft2.style.backgroundColor = '#2E2109'
        menuleft4.style.backgroundColor = '#2E2109'
        dashdash1.style.display = 'none'
        dashdash2.style.display = 'none'
        dashdash4.style.display = 'none'
        dashdash3.style.display = 'flex'
        menuleft3.style.backgroundColor = '#775201'
        dashdashtexto.innerHTML = `DASHBOARD DA ALA 3`
    } else if (dashdash2.style.display == 'none' && dashdash3.style.display == 'flex' && dashdash4.style.display == 'none' && dashdash1.style.display == 'none'){
    }

}

function clickBloco4() {
    if (dashdash4.style.display == 'none') {
        menuleft1.style.backgroundColor = '#2E2109'
        menuleft2.style.backgroundColor = '#2E2109'
        menuleft3.style.backgroundColor = '#2E2109'
        dashdash1.style.display = 'none'
        dashdash2.style.display = 'none'
        dashdash3.style.display = 'none'
        dashdash4.style.display = 'flex'
        menuleft4.style.backgroundColor = '#775201'
        dashdashtexto.innerHTML = `DASHBOARD DA ALA 4`
    } else if (dashdash2.style.display == 'none' && dashdash3.style.display == 'none' && dashdash4.style.display == 'flex' && dashdash1.style.display == 'none'){
    }

}

function clickPerfil() {
    if (subsub.style.display == 'flex') {
        subsub.style.display = 'none'
    } else {
        subsub.style.display = 'flex'
    }


}


function dashboardIcon() {
    window.location.href = "./dashs/chart.html"
}

function gerenciarconta(){
    window.location.href = "../PaginaGerenciarConta/gerenciar.html"
}

function logout(){
    window.location.href = "../PáginaInicial/home.html"
}